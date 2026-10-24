# NaN for Visual Studio Code

Support for [NaN](https://github.com/nan-language/nan), the programming language made for agentic coding.

## Features

- Syntax highlighting of `.nan` files, including the lexical errors the compiler rejects, such as misaligned indentation or trailing whitespace.
- Highlighting of `nan` code blocks in Markdown.
- A NaN icon for `.nan` files, in light and dark themes.
- Editor defaults that match the canonical format: four-space indentation and no trailing whitespace.

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

To try the extension, run `code --extensionDevelopmentPath=.` from this directory.

To release, run `npm version <patch|minor|major>` and `git push --follow-tags`: the tag publishes the version to the Marketplace and Open VSX.

## License

MIT
