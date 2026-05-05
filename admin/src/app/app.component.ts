import { Component } from '@angular/core';

import { WaiterSocketService } from './services/waiter-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [WaiterSocketService],
})
export class AppComponent {
  readonly calls$;
  readonly connected$;
  removingCallIds = new Set<string>();
  removeErrorMessage = '';

  constructor(private readonly waiterSocketService: WaiterSocketService) {
    this.calls$ = this.waiterSocketService.calls$;
    this.connected$ = this.waiterSocketService.connected$;
  }

  async removeCall(id: string): Promise<void> {
    if (!id || this.removingCallIds.has(id)) {
      return;
    }

    this.removingCallIds.add(id);
    this.removeErrorMessage = '';

    try {
      await this.waiterSocketService.removeCall(id);
    } catch (error) {
      this.removeErrorMessage = error instanceof Error
        ? error.message
        : 'Failed to remove request.';
    } finally {
      this.removingCallIds.delete(id);
    }
  }

  isRemoving(id: string): boolean {
    return this.removingCallIds.has(id);
  }
}
