import { InterviewQuestion } from '../../types';

const INTERVIEW_QUESTIONS_REACT_SEEDS: InterviewQuestion[] = [
  {
    question: 'What is React?',
    answer: 'React is an open-source JavaScript library created by Facebook for building complex, interactive UIs in web and mobile applications.',
  },
  {
    question: 'What is render prop pattern?',
    answer: `The term “render prop” refers to a simple technique for sharing code 
    between React components using a prop whose value is a function.`,
  },
  {
    question: 'What is Atomic Design Pattern?',
    answer: `Atomic design, developed by Brad Frost and Dave Olsen, is a methodology for 
    crafting design systems with five fundamental building blocks, which, when combined, 
    promote consistency, modularity, and scalability.`,
  },
  {
    question: 'What is JSX?',
    answer: `JSX stands for JavaScript XML. JSX allows us to write HTML in React. 
    JSX makes it easier to write and add HTML in React.`,
  },
  {
    question: 'What are pure components?',
    answer: `A React component is considered pure if it renders the same output for the 
    same state and props. For class components like this, React provides the PureComponent 
    base class. Class components that extend the React.PureComponent class are treated as 
    pure components.
    Pure components have some performance improvements and render optimizations since React 
    implements the shouldComponentUpdate() method for them with a shallow comparison for 
    props and state.`,
  },
];

const INTERVIEW_QUESTIONS_SEEDS: { [key: string]: InterviewQuestion[]} = {
  React: INTERVIEW_QUESTIONS_REACT_SEEDS,
};

export default INTERVIEW_QUESTIONS_SEEDS;
