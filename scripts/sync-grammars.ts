import { writeFileSync } from "node:fs";

const NAN_COMMIT = "9144dcf12b11b1f4d919fe542dce2e83fa7150fd";
const VSCODE_RELEASE = "1.143.1";

async function sync(url: string, path: string): Promise<void> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${url}: ${response.status}`);
  }
  writeFileSync(path, await response.text());
}

await sync(
  `https://raw.githubusercontent.com/nan-language/nan/${NAN_COMMIT}/editors/textmate/nan.tmLanguage.json`,
  "syntaxes/nan.tmLanguage.json",
);
await sync(
  `https://raw.githubusercontent.com/microsoft/vscode/${VSCODE_RELEASE}/extensions/markdown-basics/syntaxes/markdown.tmLanguage.json`,
  "test/grammars/markdown.tmLanguage.json",
);
