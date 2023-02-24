import Flashcard from "./components/Flashcard.js";
import react, { useState } from "react";


function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  return (
    <div>
      <Flashcard />
    </div>
  );
  }

const SAMPLE_FLASHCARDS = [{
  id : 1,
  question: "What is a stack data structure?",
  answer: "An array where we can only access, pop, and see the top of the stack",
  options: ["1", "2", "3", "4"]
}, {
  id: 2,
  question: "What is set data structure?",
  answer: "IDK",
  options: ["1","2","3","4"]
}
]
export default App;