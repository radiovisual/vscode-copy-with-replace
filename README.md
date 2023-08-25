<div align="center" style="padding:25px;text-align:center;color:white;background-color:#672367">
  <img style="display:block;margin:0 auto;padding:10px" src="https://github.com/radiovisual/vscode-copy-with-replace/blob/main/images/icon.png?raw=true" width="200" height="auto" alt="Extension logo" />
  <h2>Copy with Replace</h2>
  <p>A VS Code Extension to replace specific text snippets before copying to the clipboard.</p>
</div>

<br />

## Keyboard Shortcuts

The "copy-with-replace" extension provides a single command to replace your specified strings in the currently-selected text before copying the selected text to the clipboard.

- **For use on Windows & Linux**: <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>C</kbd>
- **For use on macOS**: <kbd>CMD</kbd> + <kbd>SHIFT</kbd> + <kbd>C</kbd>

### Copy the entire source code file

To run `Copy with Replace` on the entire source code file, simply Select the entire contents of the file, and then run copy your text with the right Keyboard shortcut for your operating system (see [Keyboard Shortcuts](#keyboard-shortcuts) above).

### Copy only selected text

If you only want to run "Copy with Replace" on selected text, be sure to have pre-selected the relevant text before you run the right Keyboard shortcut for your operating system (see [Keyboard Shortcuts](#keyboard-shortcuts) above).

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

## Installation

There are lots of different ways you can install this extension, pick the one that feels the best:

1. **Online**: You can install directly from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=radiovisual.vscode-copy-with-replace)
2. **In the VSCode Extensions Panel** You can search _`"Copy with Replace"`_ and then click the "Install" button
3. **In your terminal**: You can run the following code:

```
  code --install-extension radiovisual.vscode-copy-with-replace
```

4. **VSCode Quick Open**: You can also install in VS Code: Launch VSCode Quick Open (Ctrl+P), paste the following command, and press Enter.

```
ext install esbenp.prettier-vscode
```

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

🦄 🌈
