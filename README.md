# vscode-nan

NaN language support for Visual Studio Code: syntax highlighting and a file icon for `.nan` files, and highlighting of `nan` code blocks in Markdown.

## Development

Requires Node 26.

| Command | Purpose |
| --- | --- |
| `npm ci` | Install the dependencies |
| `npm run lint` | Lint, type-check and check formatting |
| `npm run format` | Format all files except Markdown |
| `npm test -- 'test/**/*.test.md'` | Run the grammar tests |
| `npm run sync-grammars` | Fetch the pinned grammars |
| `npm run package` | Build the `.vsix` package |

To try the extension, run `code --extensionDevelopmentPath=.` from this directory, or install the package with `code --install-extension nan-0.1.0.vsix`.

## License

MIT
