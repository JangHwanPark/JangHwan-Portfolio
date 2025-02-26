import { motion } from "motion/react";
// import Preloader from "../components/Preloader/Preloader";
// import { useState } from "react";

const TestPage = () => {
  // const [complete, setComplete] = useState(false);
  // console.log(complete);
  return (
    <>
      {/*<Preloader setComplete={setComplete}/>*/}
      <motion.div
        animate={{ opacity: 1, x: 100 }}
        initial={{ opacity: 0, x: 0 }}
        transition={{ duration: 1 }}
      >
        Hello, Framer Motion!
      </motion.div>
    </>
  );
};

export default TestPage;