# Syifani Adillah Salsabila — Engineering Portfolio

[![Portfolio CI](https://github.com/syifaniads/syifaniads-portofolio-website/actions/workflows/portfolio-ci.yml/badge.svg)](https://github.com/syifaniads/syifaniads-portofolio-website/actions/workflows/portfolio-ci.yml)

Personal engineering portfolio focused on **cybersecurity, infrastructure, cloud/DevOps, networking, IAM, and production-oriented software engineering**.

The site is implemented with **Next.js 16 + React 19 + TypeScript** and is intended to route reviewers quickly from a concise profile into evidence-backed GitHub case studies.

## Technical architecture

```text
Browser
   |
   v
Next.js application
   |
   +-- profile / experience / projects
   +-- external GitHub evidence links
   +-- downloadable ATS resume
   |
   v
Vercel production build
```

The project intentionally remains mostly static. There is no backend API or database required to render the portfolio, which keeps the attack surface and operational complexity small for this use case.

## Recruiter-facing design goals

The site prioritizes:

- fast access to technical project evidence;
- direct links to repositories instead of unsupported skill claims;
- concise descriptions of role, scope, architecture, testing, and limitations;
- infrastructure/security projects alongside software engineering work;
- a downloadable ATS-oriented resume;
- responsive desktop/mobile presentation.

## Representative portfolio areas

Current project coverage includes:

- Wazuh / SIEM monitoring and security operations;
- Active Directory / IAM / IGA security engineering;
- DevSecOps pipelines and container delivery;
- Kubernetes, Linux administration, and observability;
- GNS3 enterprise network security;
- zero-trust overlay networking;
- ns-3 network experiments;
- distributed MQTT processing;
- edge computer vision on Raspberry Pi / Jetson Nano;
- AI/RAG architecture and asynchronous processing patterns;
- Java OOP and full-stack application engineering.

## Build and validation

GitHub Actions performs a clean install from the committed lockfile and creates a production Next.js build on every push / pull request:

```bash
npm ci
npm run build:vercel
```

This catches dependency, TypeScript, Next.js routing, and production-bundling regressions before deployment.

## Run locally

```bash
npm ci
npm run dev:vercel
```

Open:

```text
http://localhost:3000
```

Production build:

```bash
npm run build:vercel
```

## Deployment

The repository includes `vercel.json` for the portfolio deployment path. Deployment credentials are intentionally not stored in source control.

## Repository structure

```text
.
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── public/
│   ├── Syifani_Adillah_Salsabila_Resume.pdf
│   └── favicon.svg
├── .github/workflows/portfolio-ci.yml
├── next.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
└── vercel.json
```

## Content integrity

Portfolio claims should remain traceable to public repositories, retained project evidence, or documented collaborative attribution. A project should not be represented as solo work when the underlying evidence shows team ownership.

The public resume is intentionally published as a portfolio artifact. Secrets, private infrastructure details, credentials, student IDs, private keys, and confidential project data should never be added to this repository.

## Contact

- [LinkedIn](https://www.linkedin.com/in/syifaniadillahsalsabila/)
- [GitHub](https://github.com/syifaniads)
- Email: syfaads16@student.ub.ac.id
