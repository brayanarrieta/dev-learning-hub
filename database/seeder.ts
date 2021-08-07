import { bulkInsertCourses, truncateCourses } from '../dal/courseRepository';
import dbConnect from './dbConnect';
import COURSES_SEEDS from './seeds/coursesSeeds';

// TODO: Fix problem with environment variables
const truncate = async () => {
  await truncateCourses();
};

const importData = async () => {
  await bulkInsertCourses(COURSES_SEEDS);
};

const seeder = async () => {
  try {
    await dbConnect();

    await truncate();
    await importData();

    // eslint-disable-next-line no-console
    console.log('Seeds inserted successfully!');
    process.exit();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

seeder();
