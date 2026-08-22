# Iheb Jdey — Software Engineering Portfolio

A bilingual (English/French) software-engineering portfolio built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4. It presents 14 project case studies spanning full-stack systems, mobile applications, applied AI, DevOps, and game development.

Production domain: [ihebjdey.tn](https://ihebjdey.tn)

## What is included

- Fourteen statically generated project routes with technical case studies, repository links, galleries, and video demos where available.
- English and French content, plus persistent light and dark themes.
- Downloadable English and French CVs served as PDF attachments.
- A progressively enhanced contact form backed by Resend.
- Vercel Analytics in production.
- TypeScript, ESLint, Vitest, React Testing Library, and a GitHub Actions quality gate.

All screenshots and visual mockups in this repository are synthetic demonstration assets. They do not contain real patient, customer, or user data.

## Project inventory

1. AgriDiagnose AI
2. TUNGO
3. CliniClic
4. Guardian Quests
5. Student Management DevOps
6. Library Management Microservices
7. Immersive Kitchen VR
8. Unity AI Navigation Algorithms
9. Machine Learning Agent Target Chase
10. Maze Escape Pro
11. SmartShop
12. Gym Exercise Finder
13. Delivery Mobile App
14. Unity 3D Endless Runner

The canonical inventory lives in [`lib/portfolio-data.ts`](lib/portfolio-data.ts). Its tests enforce exactly 14 unique slugs and complete English/French project content.

## Requirements

- Node.js 22
- pnpm 10.34.5 (declared in `package.json`)

## Local setup

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). The portfolio can be browsed without email credentials; only contact-form delivery requires the environment variables below.

Copy `.env.example` to `.env.local`, then set:

```dotenv
RESEND_API_KEY=re_...
CONTACT_FROM_EMAIL=Iheb Jdey Portfolio <contact@your-verified-domain.example>
CONTACT_TO_EMAIL=your-inbox@example.com
CONTACT_ALLOWED_ORIGINS=https://optional-alternate-domain.example
```

`CONTACT_FROM_EMAIL` must use a sender/domain verified in Resend. `CONTACT_ALLOWED_ORIGINS` is optional and comma-separated; use it only for additional trusted custom origins. The primary production origin and Vercel-provided deployment origins are handled by the application.

Never commit `.env.local`, API keys, Vercel tokens, or provider credentials.

## Quality commands

```bash
pnpm typecheck
pnpm lint
pnpm test
pnpm audit --prod --audit-level high
pnpm build
```

The GitHub Actions workflow runs those five commands on pushes and pull requests with Node.js 22 and a frozen pnpm lockfile. See [`QUALITY_STATUS.md`](QUALITY_STATUS.md) for the latest evidence-backed verification record and known gaps.

## Contact-form safeguards

The `/api/contact` route accepts JSON and URL-encoded form submissions. It validates trusted origins, enforces a 64 KiB body limit, rejects malformed or invalid input, uses a honeypot field, avoids exposing provider identifiers, and returns no-store responses. Native form submissions use same-site success/error redirects.

These application checks complement platform controls; they do not replace rate limiting.

## Vercel and Resend release checklist

1. Link this repository to the existing Vercel project that owns `ihebjdey.tn`.
2. Add `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, and `CONTACT_TO_EMAIL` to the required Vercel environments.
3. Verify the sender domain in Resend before enabling real contact delivery.
4. Add a Vercel Firewall rate-limit rule for `POST /api/contact`, observe it in log mode, then enforce it after confirming normal traffic is unaffected.
5. Run the quality commands locally and confirm the GitHub Actions `Quality` workflow passes.
6. Review the seven demo videos with audio and add accurate captions or equivalent transcripts before claiming full WCAG conformance; do not publish placeholder captions.
7. Validate a preview deployment before promoting or deploying the same revision to production.
8. After production deployment, test navigation, all project routes, both CV downloads, language/theme controls, and one real contact delivery.

The quality workflow validates the repository but does not deploy it and requires no Vercel secrets. Vercel Git integration can continue to create preview and production deployments separately.

## Repository structure

```text
app/                           Next.js App Router pages and route handlers
components/                    Shared UI and portfolio sections
lib/portfolio-data.ts          Canonical project and case-study content
public/projects/               Project screenshots, demo videos, and reports
public/cv/                     English and French CV PDFs
.github/workflows/quality.yml  Automated quality gate
```

## License and content reuse

No open-source license is currently declared. Source code, portfolio copy, CVs, and media should not be treated as licensed for reuse unless permission is granted explicitly.
