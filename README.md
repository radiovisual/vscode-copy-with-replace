# VSCode Copy with Replace

This is a simple Visual Studio Code extension that allows you to copy the contents of the open file in VSCode to the clipboard, but find and replace specified strings before the contents get copied to the clipboard. The strings to be replaced can be easily configured.

## Features

The "copy-with-replace" extension provides a single command to copy the contents of the currently opened file to the clipboard while replacing the specified strings.

- **For use on Windows & Linux**: <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>C</kbd>
- **For use on macOS**: <kbd>CMD</kbd> + <kbd>SHIFT</kbd> + <kbd>C</kbd>

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

## Known Issues

There are no known issues at this time.

## Requirements

There are no additional requirements or dependencies for this extension.