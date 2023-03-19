import React, { useState } from "react";
import JobCreationForm from "./components/JobCreationForm/JobCreationForm";
import "./App.css";
import CreatedJob from "./components/CreatedJob/CreatedJob";

function App() {
  const [FormIsShown, setFormIsShown] = useState(false);
  const showFormHandler = () => {
    setFormIsShown(true);
  };
  const hideFormHandler = () => {
    setFormIsShown(false);
  };

  return (
    <div className="container mx-auto py-10">
      <button
        onClick={showFormHandler}
        className="bg-primary text-white text-base px-5 py-3 rounded-md"
      >
        Create Job
      </button>
      <CreatedJob />
      {FormIsShown && <JobCreationForm onClose={hideFormHandler} />}
    </div>
  );
}

export default App;
