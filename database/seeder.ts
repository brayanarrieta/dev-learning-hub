import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { truncateCodeSnippetsDal } from '../dal/codeSnippetRepository';
import { bulkInsertCourses, truncateCourses } from '../dal/courseRepository';
import { bulkInterviewQuestions, truncateInterviewQuestions } from '../dal/interviewQuestionRepository';
import { bulkInsertTechnologies, truncateTechnologies } from '../dal/technologyRepository';
import { Technology } from '../types';
import CODE_SNIPPETS_SEEDS from './seeds/codeSnippetsSeeds';
import COURSES_SEEDS from './seeds/coursesSeeds';
import INTERVIEW_QUESTIONS_SEEDS from './seeds/interviewQuestions';
import TECHNOLOGIES_SEEDS from './seeds/technologiesSeeds';

dotenv.config({
  path: './.env.local',
});

const truncate = async () => {
  await truncateCourses();
  await truncateTechnologies();
  await truncateInterviewQuestions();
  await truncateCodeSnippetsDal();
};

const importData = async () => {
  await bulkInsertCourses(COURSES_SEEDS);
  const technologies = await bulkInsertTechnologies(TECHNOLOGIES_SEEDS);
  await Promise.all(
    technologies.map(async (
      technology: Technology,
    ) => {
      const questions = (INTERVIEW_QUESTIONS_SEEDS[technology.name] || []).map(
        (i) => ({ ...i, technologyId: technology._id }),
      );

      return bulkInterviewQuestions(questions);
    }),
  );

  await Promise.all(
    technologies.map(async (
      technology: Technology,
    ) => {
      const codeSnippets = (CODE_SNIPPETS_SEEDS[technology.name] || []).map(
        (i) => ({ ...i, technologyId: technology._id }),
      );

      return bulkInterviewQuestions(codeSnippets);
    }),
  );
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
