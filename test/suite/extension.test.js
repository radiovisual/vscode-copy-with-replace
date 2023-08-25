const assert = require("assert");
const vscode = require("vscode");
const { afterEach, beforeEach, describe, it } = require("mocha");
const { once } = require("events");

describe("Copy With Replace Extension Tests", () => {
  beforeEach(async () => {
    await vscode.commands.executeCommand("workbench.action.closeAllEditors");
  });

  afterEach(async () => {
    await vscode.commands.executeCommand("workbench.action.closeAllEditors");
  });

  it("Should apply replacements on selected text", async function () {
    this.timeout(10000); // Set the timeout for this test to 10000ms

    const expectedResult = `import { function } from '@bar/function';`;

    // Create a new text document and set some sample content
    const document = await vscode.workspace.openTextDocument({
      language: "javascript",
      content: "import { function } from '@foo/function';",
    });

    // Show the document in the editor
    const editor = await vscode.window.showTextDocument(document);

    // Set the selection to cover the entire line
    const startPosition = new vscode.Position(0, 0);
    const endPosition = new vscode.Position(0, document.lineAt(0).text.length);
    editor.selection = new vscode.Selection(startPosition, endPosition);

    const replacements = {
      "@foo": "@bar",
    };

    // Execute the command to copy and replace
    await vscode.commands.executeCommand("extension.copyWithReplace", {
      replacements,
    });

    // Wait for a while before pasting the content
    await new Promise((resolve) => setTimeout(resolve, 6000));

    // Execute the command to paste the content
    await vscode.commands.executeCommand("editor.action.clipboardPasteAction");

    // Wait for a while before checking the editor content
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Get the content of the editor after pasting
    const newContent = editor.document.getText();

    assert.strictEqual(
      newContent,
      expectedResult,
      "Replacements were not applied correctly"
    );
  });

  it("Should prompt the user to select text when nothing is selected", async () => {
    const testDocument = await vscode.workspace.openTextDocument({
      content: `import { function } from '@foo/function';`,
    });
    await vscode.window.showTextDocument(testDocument);

    const showInformationMessage = vscode.window.showInformationMessage;
    let messageOutput = "";
    vscode.window.showInformationMessage = (message) => {
      messageOutput = message;
    };

    await vscode.commands.executeCommand("extension.copyWithReplace");

    assert.strictEqual(
      messageOutput,
      "Please select text to copy with replacements",
      "The information message was not displayed as expected"
    );

    vscode.window.showInformationMessage = showInformationMessage;
  });
});
