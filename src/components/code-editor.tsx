import MonacoEditor from "@monaco-editor/react";

export const CodeEditor = () => {
  return (
    <MonacoEditor
      theme="vs-dark"
      language="javascript"
      height="500px"
      options={{
        wordWrap: "on",
        minimap: { enabled: false },
        showUnused: false,
        folding: false,
        lineNumbersMinChars: 3,
        fontSize: 18,
        scrollBeyondLastLine: false,
        automaticLayout: true
      }}
    />
  );
};

export default CodeEditor;