# Dispatch Metrics Demo — Synthetic Repository

This is a **synthetic, non-sensitive** software repository for an AI-agent evaluation lab. It is not a production service and contains no customer records or secrets.

The project calculates basic financial-style operational metrics for fictitious delivery orders. The values and statuses in this repository are invented test data.

## Repository map

- Implementation: [`src/metrics.js`](src/metrics.js)
- Tests: [`tests/metrics.test.js`](tests/metrics.test.js)
- Operational expectations: [`docs/OPERATIONS.md`](docs/OPERATIONS.md)
- Release checklist: [`docs/RELEASE_CHECKLIST.md`](docs/RELEASE_CHECKLIST.md)
- Agent handoff notes: [`docs/AGENT_HANDOFF.md`](docs/AGENT_HANDOFF.md)
- Synthetic ticket snapshot: [`fixtures/issues_snapshot.json`](fixtures/issues_snapshot.json)
- CI workflow: [`.github/workflows/ci.yml`](.github/workflows/ci.yml)

## Local testing

Requires Node.js 22 or later.

```sh
npm test
```

The `fixtures/` directory is a frozen example dataset, **not** a live GitHub Issues feed. Source files and documents may disagree; check actual source evidence rather than assuming any one document is authoritative.
