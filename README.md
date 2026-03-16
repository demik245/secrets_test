# secrets_test

A repository containing **fake** secrets intended to test secret-scanning tools such as [gitleaks](https://github.com/gitleaks/gitleaks).

> ⚠️ **All credentials in this repository are completely fake and are only here to trigger secret-scanning detections. Do NOT use any of these values in real applications.**

## Files

| File | Description |
|------|-------------|
| `.env.example` | Example `.env` file with fake AWS, GitHub, Stripe, Slack, and database credentials |
| `config/secrets_template.yml` | YAML configuration template with fake credentials across multiple services |
| `src/config.js` | JavaScript config module with hardcoded fake secrets |
| `src/config.py` | Python config module with hardcoded fake secrets |

## Fake secret types included

- **AWS** – Access Key ID (`AKIA…`) and Secret Access Key
- **GitHub** – Personal Access Token (`ghp_…`)
- **DigitalOcean** – Personal Access Token (`dop_v1_…`)
- **PyPI** – API upload token (`pypi-…`)
- **SendGrid** – API key (`SG.…`)
- **Google OAuth** – Client secret (`GOCSPX-…`)
- **Database** – PostgreSQL connection string with embedded password
- **Generic** – API keys, JWT secrets, and app secret keys

## Usage

Run gitleaks against this repository to see detections:

```bash
gitleaks detect --source . --verbose
```
