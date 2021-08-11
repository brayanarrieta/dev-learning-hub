import CodeSnippet from '../database/models/CodeSnippet';

export const bulkInsertCodeSnippetsDal = async (
  codeSnippets: any,
) => CodeSnippet.insertMany(codeSnippets);

export const truncateCodeSnippetsDal = async () => CodeSnippet.deleteMany();

export const getCodeSnippetsCountDal = async () => {
  const count = await CodeSnippet.find().countDocuments();
  return count;
};

export const getCodeSnippetsWithPaginationDal = async (currentPage: number, pageSize: number) => {
  const offset = (currentPage - 1) * pageSize;
  const codeSnippets = await CodeSnippet.find().skip(offset)
    .limit(pageSize);
  return codeSnippets;
};
