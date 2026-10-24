# 0001. Stack

Status: accepted

## Context

vscode-nan is the Visual Studio Code extension of the NaN language. It highlights `.nan` files with the TextMate grammar that the `nan-language/nan` repository maintains beside the language specification, and `nan` code blocks in Markdown. A client of the NaN language server will follow. VS Code extensions run on Node and are published to the Marketplace with `vsce`.

## Decision

- MIT licence, the licence of most VS Code extensions and of the grammars they build on.
- Node 26, pinned in `.nvmrc` and `engines`, with npm and a committed lockfile.
- TypeScript 6.0, the latest version typescript-eslint supports, run by Node's type stripping without a build step, and checked by `tsc --noEmit`.
- ESLint with typescript-eslint, and Prettier.
- `@vscode/vsce` to package the extension.
- `vscode-tmgrammar-test` to test the grammars on annotated files, through `vscode-textmate` and `vscode-oniguruma`, the engine VS Code runs.
- The NaN grammar is a committed copy of `editors/textmate/nan.tmLanguage.json` at a pinned commit of `nan-language/nan`, fetched by `npm run sync-grammars`. The same script fetches VS Code's Markdown grammar at a pinned VS Code release, which the tests need to load the injection.

## Consequences

- The extension builds and tests offline; a grammar change in `nan` reaches it only when the pin moves.
- TypeScript cannot move to 7 until typescript-eslint supports it.
- A bundler comes with the first extension code that runs in VS Code.
