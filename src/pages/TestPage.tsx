import Preloader from "../components/Preloader/Preloader";
import { useState } from "react";

const TestPage = () => {
  const [complete, setComplete] = useState(false);
  console.log(complete);
  return (
    <>
      <Preloader setComplete={setComplete}/>
    </>
  );
};

export default TestPage;