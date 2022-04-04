import React from "react";
import AnswerSection from "./components/AnswerSection";
import CheckSection from "./components/CheckSection";
import StartSection from "./components/StartSection";
import getQuestions from "./helpers/getQuestions";



function App() {

  const [questions, setQuestions] = React.useState([])

  React.useEffect( () => {
   getQuestions(setQuestions)
  }, [])


  return (
   <>
    <StartSection /> 
    <AnswerSection arr={questions}  />
    <CheckSection />
   </>  
  );
}

export default App;
