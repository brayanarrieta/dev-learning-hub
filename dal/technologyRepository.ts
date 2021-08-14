import { Technology } from '../database/models';

export const bulkInsertTechnologies = async (
  technologies: any,
) => Technology.insertMany(technologies);

export const truncateTechnologies = async () => Technology.deleteMany();

export const getTechnologiesCountDal = async () => {
  const count = await Technology.find().countDocuments();
  return count;
};

export const getTechnologiesWithPaginationDal = async (currentPage: number, pageSize: number) => {
  const offset = (currentPage - 1) * pageSize;
  const technologies = await Technology.find().skip(offset)
    .limit(pageSize);
  return technologies;
};

export const getTechnologyBySlugDal = async (slug: string) => Technology.findOne({ slug });

export const getTechnologiesDal = async () => Technology.find();
