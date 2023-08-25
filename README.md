<div align="center" style="padding:25px;text-align:center;color:white;background-color:#672367">
  <img style="display:block;margin:0 auto;padding:10px" src="https://github.com/radiovisual/vscode-copy-with-replace/blob/main/images/icon.png?raw=true" width="200" height="auto" alt="Extension logo" />
  <h2>Copy with Replace</h2>
  <p>A VS Code Extension to replace specific text snippets before copying to the clipboard.</p>
</div>

<br />

## Features

The "copy-with-replace" extension provides a single command to copy the contents of the currently opened file to the clipboard while replacing the specified strings.

- **For use on Windows & Linux**: <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>C</kbd>
- **For use on macOS**: <kbd>CMD</kbd> + <kbd>SHIFT</kbd> + <kbd>C</kbd>

## Installation

You can either install directly from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=radiovisual.vscode-copy-with-replace), or search _`"Copy with Replace"`_ in the VSCode extensions panel, or run the following code in your terminal:

```
$ code --install-extension radiovisual.vscode-copy-with-replace
```

## Extension Settings

This extension contributes the following settings:

`copyWithReplace.replacements`: An array of objects containing search and replace properties for string replacements. For example:

```json
{
  "copyWithReplace.replacements": [
    {
      "search": "foo",
      "replace": "bar"
    }
  ]
}
```

The example above would copy all the instances of `foo` with `bar` before moving the copied contents into the system clipboard.

## Testing and Contributing to the Extension

If you want to test or contribute to the "copy-with-replace" extension, follow these steps:

1. Clone the repository or download the source code of the extension.
2. Navigate to the extension's directory in your terminal or command prompt.
3. Run npm install to install the required dependencies.
4. Open the extension's folder in Visual Studio Code.
5. Press F5 to launch the Extension Development Host. This opens a new window with the extension loaded, allowing you to test it.
6. To run the tests, press Ctrl+Shift+P (or Cmd+Shift+P on macOS) to open the Command Palette, then search for and select "Tasks: Run Test Task". The tests should pass, and you'll see a message in the terminal indicating the results.

## Contributing

If you want to contribute to the extension:

1. Fork the extension's repository on GitHub.
2. Clone your fork and create a new branch for your feature or bug fix.
3. Make your changes and commit them to your branch.
4. Run the tests to ensure your changes don't introduce new issues.
5. Create a pull request on the original repository with a description of your changes.

After reviewing your pull request, the maintainers may provide feedback and request changes. Once your changes are approved, they will be merged into the main repository.

Thank you for your interest in contributing to the "copy-with-replace" extension!

---

:rainbow: :unicorn:
