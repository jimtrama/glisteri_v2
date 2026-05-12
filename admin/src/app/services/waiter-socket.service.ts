import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { io, type Socket } from 'socket.io-client';
import { runtimeConfig } from '../../environments/runtime-config';

export type WaiterCall = {
  id: string;
  sunbedNumber: string;
  receivedAt: string;
};

@Injectable()
export class WaiterSocketService {
  private readonly apiBaseUrl = runtimeConfig.adminBackendUrl;
  private readonly callsSubject = new BehaviorSubject<WaiterCall[]>([]);
  private readonly connectedSubject = new BehaviorSubject(false);
  private readonly socket: Socket;
  readonly calls$ = this.callsSubject.asObservable();
  readonly connected$ = this.connectedSubject.asObservable();

  constructor() {
    this.socket = io(this.apiBaseUrl, {
      transports: ['websocket', 'polling'],
    });

    this.socket.on('connect', () => {
      this.connectedSubject.next(true);
    });

    this.socket.on('disconnect', () => {
      this.connectedSubject.next(false);
    });

    this.socket.on('waiter:history', (calls: WaiterCall[]) => {
      this.callsSubject.next(this.normalizeCalls(calls));
    });

    this.socket.on('waiter:called', (call: WaiterCall) => {
      this.callsSubject.next([
        this.normalizeCall(call),
        ...this.callsSubject.value,
      ]);
    });

    this.socket.on('waiter:removed', ({ id }: { id?: string }) => {
      if (!id) {
        return;
      }

      this.callsSubject.next(
        this.callsSubject.value.filter((call) => call.id !== id),
      );
    });
  }

  async removeCall(id: string): Promise<void> {
    const response = await fetch(`${this.apiBaseUrl}/api/call-waiter/${encodeURIComponent(id)}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const payload = await response.json().catch(() => ({}));
      throw new Error(payload?.message || 'Failed to remove waiter request.');
    }

    this.callsSubject.next(
      this.callsSubject.value.filter((call) => call.id !== id),
    );
  }

  private normalizeCalls(calls: WaiterCall[]): WaiterCall[] {
    return Array.isArray(calls)
      ? calls.map((call) => this.normalizeCall(call))
      : [];
  }

  private normalizeCall(call: WaiterCall): WaiterCall {
    return {
      id: String(call?.id ?? ''),
      sunbedNumber: String(call?.sunbedNumber ?? '').trim(),
      receivedAt: call?.receivedAt ?? new Date().toISOString(),
    };
  }
}
