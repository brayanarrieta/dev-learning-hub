import CodeSnippet from '../database/models/CodeSnippet';

export const bulkInsertCodeSnippetsDal = async (
  codeSnippets: any,
) => CodeSnippet.insertMany(codeSnippets);

export const truncateCodeSnippetsDal = async () => CodeSnippet.deleteMany();
