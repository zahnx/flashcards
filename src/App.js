import { useState } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const flashcards = [
  {
    id: 1,
    question: "What is React?",
    answer: "A JavaScript library for building user interfaces.",
  },
  {
    id: 2,
    question: "What is JSX?",
    answer:
      "A syntax extension for JavaScript that looks like HTML but is processed by Babel into JavaScript.",
  },
  {
    id: 3,
    question: "What is a React component?",
    answer: "A reusable piece of UI that can be a function or a class.",
  },
  {
    id: 4,
    question: "What is the difference between functional and class components?",
    answer:
      "Functional components are simpler and use hooks, while class components use lifecycle methods and `this`.",
  },
  {
    id: 5,
    question: "What are props in React?",
    answer:
      "Props (short for properties) are used to pass data from a parent component to a child component.",
  },
  {
    id: 6,
    question: "What is useState?",
    answer:
      "A React Hook that allows you to add state to functional components.",
  },
  {
    id: 7,
    question: "What is useEffect used for?",
    answer:
      "It runs side effects in function components, such as fetching data or subscribing to events.",
  },
  {
    id: 8,
    question: "What does useRef do?",
    answer:
      "It creates a reference to a DOM element or a value that persists between renders without causing re-renders.",
  },
  {
    id: 9,
    question: "How does useContext work?",
    answer:
      "It allows components to consume values from React’s Context API without prop drilling.",
  },
  {
    id: 10,
    question: "What is useReducer?",
    answer:
      "A hook similar to useState but better for managing complex state logic.",
  },
  {
    id: 11,
    question: "What is React Router?",
    answer: "A library for handling navigation in React applications.",
  },
  {
    id: 12,
    question: "What is the Virtual DOM?",
    answer:
      "A lightweight JavaScript representation of the real DOM that React uses for efficient updates.",
  },
  {
    id: 13,
    question: "What are React portals?",
    answer:
      "A way to render components outside of their parent hierarchy in the DOM.",
  },
  {
    id: 14,
    question: "What is lazy loading in React?",
    answer:
      "A technique to load components dynamically when needed to improve performance.",
  },
  {
    id: 15,
    question: "What is server-side rendering (SSR)?",
    answer:
      "Rendering React components on the server instead of the client for better performance and SEO.",
  },
];

export default function App() {
  const [selectedId, setselectedId] = useState(null);

  function handleClick(id) {
    setselectedId(id !== selectedId ? id : null);
  }

  return (
    <>
      <header className=" container text-center my-5">
        <h1>Flashcards</h1>
        <p>
          A simple flashcard project built to deepen my understanding of React
          state and interactivity.
        </p>
      </header>
      <div className="container-fluid d-flex justify-content-center text-center my-5">
        <CardsContainer onHandleClick={handleClick} selectedId={selectedId} />
      </div>
    </>
  );
}

function CardsContainer({ onHandleClick, selectedId }) {
  return (
    <div className="row">
      {flashcards.map((flashcard) => (
        <Cards
          flashcard={flashcard}
          key={flashcard.id}
          onHandleClick={onHandleClick}
          selectedId={selectedId}
        />
      ))}
    </div>
  );
}

function Cards({ flashcard, onHandleClick, selectedId }) {
  const isFlipped = flashcard.id === selectedId;

  return (
    <div className="col-lg-4 col-md-6 col-12 mb-5 d-flex justify-content-center">
      <div
        className="card-container"
        onClick={() => onHandleClick(flashcard.id)}
      >
        <div className={`card-inner ${isFlipped ? "flipped" : ""}`}>
          <div className="card-face front">
            <p>{flashcard.question}</p>
          </div>
          <div className="card-face back">
            <p>{flashcard.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
