# 0002. Publishing

Status: accepted

## Context

VS Code installs extensions from the Visual Studio Marketplace. VSCodium, Cursor, Windsurf and other editors built on VS Code cannot use it and install from Open VSX instead; many of the agentic coding environments NaN is made for are among them.

## Decision

A tag `v<version>` matching the version of `package.json` triggers a GitHub Actions workflow that lints, tests and packages the extension once, then publishes that package to the Marketplace with `vsce` and to Open VSX with `ovsx`. The tokens are the repository secrets `VSCE_PAT` and `OVSX_PAT`.

## Consequences

- Both registries always serve the same package.
- A release is `npm version` and a push of its tag; nobody publishes from a workstation.
- The Marketplace token is an Azure DevOps personal access token and expires within a year; publishing fails until it is renewed in the secret.
