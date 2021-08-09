import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { bulkInsertCourses, truncateCourses } from '../dal/courseRepository';
import { bulkInsertTechnologies, truncateTechnologies } from '../dal/technologyRepository';
import COURSES_SEEDS from './seeds/coursesSeeds';
import TECHNOLOGIES_SEEDS from './seeds/technologiesSeeds';

dotenv.config({
  path: './.env.local',
});

const truncate = async () => {
  await truncateCourses();
  await truncateTechnologies();
};

const importData = async () => {
  await bulkInsertCourses(COURSES_SEEDS);
  await bulkInsertTechnologies(TECHNOLOGIES_SEEDS);
};

const seeder = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;
    // @ts-ignore as the env variable cannot be undefined
    await mongoose.connect(mongoURI, {
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

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
