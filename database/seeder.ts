import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { bulkInsertCodeSnippetsDal, truncateCodeSnippetsDal } from '../dal/codeSnippetRepository';
import { bulkInsertCommunityRequestDal, truncateCommunityRequestDal } from '../dal/communityRequestRepository';
import { bulkInsertCourses, truncateCourses } from '../dal/courseRepository';
import { bulkInterviewQuestions, truncateInterviewQuestions } from '../dal/interviewQuestionRepository';
import { bulkInsertQuizQuestionsDal, truncateQuizQuestionsDal } from '../dal/quizQuestionRepository';
import { bulkInsertTechnologies, truncateTechnologies } from '../dal/technologyRepository';
import { Technology } from '../types';
import CODE_SNIPPETS_SEEDS from './seeds/codeSnippetsSeeds';
import COMMUNITY_REQUEST_SEEDS from './seeds/communityRequestSeeds';
import COURSES_SEEDS from './seeds/coursesSeeds';
import INTERVIEW_QUESTIONS_SEEDS from './seeds/interviewQuestions';
import QUIZ_QUESTIONS_SEEDS from './seeds/quizQuestionsSeeds';
import TECHNOLOGIES_SEEDS from './seeds/technologiesSeeds';

dotenv.config({
  path: './.env.local',
});

const truncate = async () => {
  await truncateCourses();
  await truncateTechnologies();
  await truncateInterviewQuestions();
  await truncateCodeSnippetsDal();
  await truncateCommunityRequestDal();
  await truncateQuizQuestionsDal();
};

const importData = async () => {
  await bulkInsertCourses(COURSES_SEEDS);
  const technologies = await bulkInsertTechnologies(TECHNOLOGIES_SEEDS);
  await Promise.all(
    technologies.map(async (
      technology: Technology,
    ) => {
      const questions = (INTERVIEW_QUESTIONS_SEEDS[technology.name] || []).map(
        (i) => ({ ...i, technology: technology._id }),
      );

      return bulkInterviewQuestions(questions);
    }),
  );

  await Promise.all(
    technologies.map(async (
      technology: Technology,
    ) => {
      const codeSnippets = (CODE_SNIPPETS_SEEDS[technology.name] || []).map(
        (i) => ({ ...i, technology: technology._id }),
      );

      return bulkInsertCodeSnippetsDal(codeSnippets);
    }),
  );

  await bulkInsertCommunityRequestDal(COMMUNITY_REQUEST_SEEDS);

  await Promise.all(
    technologies.map(async (
      technology: Technology,
    ) => {
      const quizQuestions = (QUIZ_QUESTIONS_SEEDS[technology.name] || []).map(
        (i) => ({ ...i, technology: technology._id }),
      );

      return bulkInsertQuizQuestionsDal(quizQuestions);
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
