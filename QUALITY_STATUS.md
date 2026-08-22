# Portfolio Quality Status

Last evidence update: August 22, 2026

This file replaces the former test report, which included broad manual claims that were not tied to repeatable checks. The status below records only results observed against the current repository and clearly marks work that still requires external configuration or human review.

## Automated verification

| Check | Latest observed result | Evidence |
| --- | --- | --- |
| TypeScript | Pass | The final `next build` completed its TypeScript validation successfully on August 22, 2026. |
| ESLint | Pass | `npm run lint` completed with zero warnings on August 22, 2026. |
| Vitest | Pass | `npm test` completed with 8 test files and 35 passing tests on August 22, 2026. |
| Frozen install | Pass | `pnpm install --frozen-lockfile --offline` confirmed the regenerated lockfile is internally consistent. |
| Production build | Pass | The post-cleanup Next.js 16.3.2 build generated 23 static routes, including all 14 case studies and the metadata routes. |
| Production dependency audit | Pass | `pnpm audit --prod --audit-level high` reported zero known vulnerabilities against the final lockfile. |

The GitHub Actions `Quality` workflow independently runs installation with a frozen lockfile, type checking, linting, tests, and a production build on every push and pull request.

## Automated test coverage

| Area | Tests | Covered behavior |
| --- | ---: | --- |
| Contact route | 14 | Media types, JSON shape, origin checks, body limits, invalid UTF-8/control characters, honeypot behavior, missing configuration, provider success/failure, and native-form redirects. |
| Resume route | 3 | English and French PDF responses, attachment headers, and unsupported-language handling. |
| Contact UI | 5 | Progressive enhancement, explicit success handling, failure-state value preservation, invalid 200 responses, and duplicate-submit prevention. |
| Header | 3 | Link order, mobile menu/scroll locking, Escape handling, and desktop-breakpoint cleanup. |
| Portfolio data | 5 | Exactly 14 unique slugs, bilingual completeness, repository URL ownership, media metadata, lookup, and localization. |

All automated form inputs and browser test data are synthetic.

## Browser checks observed during this audit

- At an 800 px viewport, the mobile navigation control is available.
- An open mobile menu releases the body scroll lock and switches to desktop navigation when resized to 1200 px.
- A contact delivery failure is announced in the live region, clears the busy state, and preserves the entered values.
- The final production homepage loaded with the expected title after the last runtime change.

Local HTTP verification against the final production server also confirmed all 14 project routes, both contact status pages, `robots.txt`, `sitemap.xml`, and the generated Open Graph image return 200; an unknown project returns 404. The sitemap contains 15 URLs, both resume endpoints return PDF attachments, and the expected security and social-metadata headers/tags are present.

These checks are targeted observations, not a claim of complete cross-browser or visual-regression coverage.

## Release checks still required

- Complete the final desktop, tablet, and mobile browser pass, including console and accessibility scans.
- Confirm the GitHub Actions `Quality` workflow passes under the repository's Node 22 target after pushing the release revision.
- Configure and verify the Resend sender/API key in Vercel, then send one real end-to-end contact message.
- Add and validate a Vercel Firewall rate-limit rule for `POST /api/contact`.
- Review the seven video audio tracks and add content-accurate captions or equivalent transcripts; the repository intentionally does not include fabricated placeholder captions.
- Confirm the deployment connected to `ihebjdey.tn` is built from this exact revision.

## Explicit limitations

- The automated suite does not currently include full Playwright-style end-to-end tests or visual-regression snapshots.
- The final automated browser pass stopped after page load because the local browser tool reached its usage limit. The HTTP contract checks completed, but they do not replace the remaining human visual and keyboard pass.
- A successful mocked Resend test does not prove production email delivery.
- Two large MP4s are not fast-start optimized; videos now use `preload="none"`, but remuxing/re-encoding those source files would improve playback startup.
- Vercel environment variables, domain ownership, firewall rules, and deployment aliases are external state and cannot be guaranteed by repository tests.
- Project screenshots and mockups are synthetic demonstrations; they are not evidence of production usage or real-user workflows.
