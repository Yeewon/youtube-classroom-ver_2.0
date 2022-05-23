import React, { ReactElement } from "react";
import Header from "./components/base/Header";
import Classroom from "./components/domain/Classroom";

const App = (): ReactElement => {
  return (
    <div className="App">
      <Header />
      <Classroom />
    </div>
  );
};

export default App;
