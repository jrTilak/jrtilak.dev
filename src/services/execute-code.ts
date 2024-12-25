// all supported runtimes: https://emkc.org/api/v2/piston/runtimes
const SUPPORTED_LANGUAGES = [
  {
    language: "javascript",
    version: "18.15.0",
    filename: "index.js",
  },
  {
    language: "cpp",
    version: "10.2.0",
    filename: "main.cpp",
  },
] as const;

export type ExecuteCodeOutput = {
  stdout: string;
  stderr: string;
  code: 0 | 1;
  signal: string;
  output: string;
};

export type ExecuteCodeProps = {
  code: string;
  lang: string;
};

export const executeCode = async ({
  code,
  lang,
}: ExecuteCodeProps): Promise<ExecuteCodeOutput> => {
  const langDetails = SUPPORTED_LANGUAGES.find(
    (supportedLang) => supportedLang.language === lang
  );

  if (!langDetails) {
    return {
      stdout: "",
      stderr: "Language not supported!",
      code: 1,
      signal: "",
      output: "Language not supported!",
    };
  }
  const body = {
    language: lang,
    version: langDetails.version,
    files: [
      {
        name: langDetails.filename,
        content: code,
      },
    ],
  };

  try {
    const res = await fetch("https://emkc.org/api/v2/piston/execute", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    return data.run as ExecuteCodeOutput;
  } catch (error: any) {
    return {
      stdout: "",
      stderr: error.message || "An error occurred",
      code: 1,
      signal: "",
      output: error.message || "An error occurred",
    };
  }
};
