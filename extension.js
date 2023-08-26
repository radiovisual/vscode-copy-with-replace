const vscode = require('vscode');

async function copyWithReplace() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    return;
  }

  const document = editor.document;
  const selection = editor.selection;
  const hasSelection = !selection.isEmpty;

  if (!hasSelection) {
    vscode.window.showInformationMessage(
      'Please select text to copy with replacements',
    );
    return;
  }

  const text = document.getText(selection);

  const config = vscode.workspace.getConfiguration('copyWithReplace');
  const replacements = config.get('replacements', []);

  let modifiedText = text;

  for (const { search, replace } of replacements) {
    modifiedText = modifiedText.split(search).join(replace);
  }

  await vscode.env.clipboard.writeText(modifiedText);
  vscode.window.showInformationMessage('Copied with replacements');
}

function activate(context) {
  let disposable = vscode.commands.registerCommand(
    'extension.copyWithReplace',
    copyWithReplace,
  );

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
  copyWithReplace,
};
