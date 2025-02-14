import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Editor from '@monaco-editor/react';

const languages = [
  { label: 'C++', value: 'cpp' },
  { label: 'Python', value: 'python' },
  { label: 'JavaScript', value: 'javascript' },
  { label: 'Java', value: 'java' },
  { label: 'C', value: 'c' },
  { label: 'Ruby', value: 'ruby' },
  { label: 'Go', value: 'go' },
  { label: 'Rust', value: 'rust' },
  { label: 'Swift', value: 'swift' },
];

const defaultCodeSnippets: { [key: string]: string } = {
  cpp: '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, World!";\n    return 0;\n}',
  python: 'print("Hello, World!")',
  javascript: 'console.log("Hello, World!");',
  java: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
  c: '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!");\n    return 0;\n}',
  ruby: 'puts "Hello, World!"',
  go: 'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, World!")\n}',
  rust: 'fn main() {\n    println!("Hello, World!");\n}',
  swift: 'print("Hello, World!")',
};

const Compiler: React.FC = () => {
  const [code, setCode] = useState<string>(defaultCodeSnippets['cpp']);
  const [output, setOutput] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>('cpp');

  useEffect(() => {
    setCode(defaultCodeSnippets[language]);
  }, [language]);

  const handleRunCode = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://emkc.org/api/v2/piston/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          language: language,
          version: '*', // Use the latest version available
          files: [
            {
              name: `main.${language}`,
              content: code,
            },
          ],
        }),
      });

      const result = await response.json();
      console.log(result); // Log the entire response for debugging

      if (result.run && result.run.stdout) {
        setOutput(result.run.stdout.replace(/\n/g, '<br />'));
        setError('');
      } else if (result.run && result.run.stderr) {
        setOutput(result.run.stderr.replace(/\n/g, '<br />'));
        setError('');
      } else {
        setOutput('');
        setError('Failed to retrieve output from the API.');
      }
    } catch (err) {
      console.error(err);
      setOutput('');
      setError('An error occurred while running the code.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="h-[calc(100vh-12rem)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
        <div className="bg-card rounded-lg shadow-md p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-foreground">Code Editor</h2>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="px-4 py-2 bg-background text-foreground rounded-md"
            >
              {languages.map((lang) => (
                <option key={lang.value} value={lang.value}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>
          <div className="h-[calc(100%-5rem)]">
            <Editor
              height="100%"
              defaultLanguage={language}
              theme="vs-dark"
              value={code}
              onChange={(value) => setCode(value || '')}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
              }}
            />
          </div>
        </div>

        <div className="bg-card rounded-lg shadow-md p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-foreground">Output</h2>
            <button
              onClick={handleRunCode}
              className="px-4 py-2 bg-primary hover:bg-primary-dark text-primary-foreground rounded-md"
              disabled={isLoading}
            >
              {isLoading ? 'Running...' : 'Run Code'}
            </button>
          </div>
          <div className="h-[calc(100%-5rem)] bg-gray-100 dark:bg-secondary rounded-md p-4 font-mono text-sm overflow-auto text-foreground">
            {isLoading ? (
              <div className="flex justify-center items-center h-full">
                <div className="loader"></div>
              </div>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: output || 'Output will appear here...' }} />
            )}
            {error && <div className="text-red-500">{error}</div>}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Compiler;
