import React from "react";
import Header from "../components/Header";
import NavigationBar from "../components/Navbar";
import Jumbo from "../components/Jumbo";
import Footer from "../components/Footer";

import Dice from "./utils/DiceRoll";
import ProgressTimer from "./utils/ProgressTimer";
import CodeExercisesJournal from "./utils/CodeExercisesJournal";
import StickyNotes from "./utils/StickyNotes";

function UtilsPage() {
  return (
    <>
      <Header />
      {/* <NavigationBar />
      <Jumbo msg="This is the Utilities Page" /> */}
      <ProgressTimer />
      <CodeExercisesJournal />
      <Dice />
      <StickyNotes />
      {/* <Footer /> */}
    </>
  );
}

export default UtilsPage;
