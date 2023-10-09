import React from "react";
import Header from "../components/Header";
import NavigationBar from "../components/Navbar";
import Jumbo from "../components/Jumbo";
import Footer from "../components/Footer";

import Dice from "./utils/DiceRoll";
import ProgressTimer from "./utils/ProgressTimer";
import CodeExercisesJournal from "./utils/CodeExercisesJournal";

function UtilsPage() {
  return (
    <>
      <Header />
      {/* <NavigationBar />
      <Jumbo msg="This is the Utilities Page" /> */}
      {/* <Dice sides="6" /> */}
      <ProgressTimer />
      <CodeExercisesJournal />
      {/* <Footer /> */}
    </>
  );
}

export default UtilsPage;
