import Technology from '../database/models/Technology';

export const bulkInsertTechnologies = async (
  technologies: any,
) => Technology.insertMany(technologies);

export const truncateTechnologies = async () => Technology.deleteMany();
