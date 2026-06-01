# Glysteri Nginx HTTPS Setup

This folder contains a local self-signed HTTPS certificate for `10.10.11.15` and an Nginx config that:

- redirects `http://10.10.11.15:8080` to `https://10.10.11.15`
- serves the Angular build from `/var/www/glisteri_v2`
- proxies `/api/` and `/socket.io/` to the backend on `127.0.0.1:3001`

## Files

- `glisteri-https.conf`: Nginx site config.
- `ssl/glisteri-local.cert.pem`: self-signed certificate.
- `ssl/glisteri-local.crt.pem`: same certificate with a `.crt.pem` name.
- `ssl/glisteri-local.key.pem`: private key.
- `ssl/glisteri-local.fullchain-and-key.pem`: combined cert and key for tools that need one PEM.
- `ssl/glisteri-openssl.cnf`: certificate generation config.

## Install On The Server

Run these on the machine at `10.10.11.15`:

```bash
sudo mkdir -p /etc/nginx/ssl /var/www/glisteri_v2
sudo cp server/nginx/ssl/glisteri-local.cert.pem /etc/nginx/ssl/
sudo cp server/nginx/ssl/glisteri-local.key.pem /etc/nginx/ssl/
sudo cp -R dist/glisteri_v2/* /var/www/glisteri_v2/
sudo cp server/nginx/glisteri-https.conf /etc/nginx/sites-available/glisteri
sudo ln -sf /etc/nginx/sites-available/glisteri /etc/nginx/sites-enabled/glisteri
sudo nginx -t
sudo systemctl reload nginx
```

If your Nginx does not use `sites-available` / `sites-enabled`, copy `glisteri-https.conf` into `/etc/nginx/conf.d/glisteri.conf` instead.

## Backend URL Note

For HTTPS pages, the frontend should call the backend through HTTPS too. The Nginx config proxies `/api/` to the backend, so the clean setup is to rebuild the catalog with:

```bash
CATALOG_BACKEND_URL=https://10.10.11.15 npm run build
```

Then copy `dist/glisteri_v2` to `/var/www/glisteri_v2`.

## Browser Warning

This is a self-signed certificate, so phones/browsers will show a trust warning unless you install/trust `ssl/glisteri-local.cert.pem` on the device.

For public production use, replace these files with a real certificate from a trusted CA.
