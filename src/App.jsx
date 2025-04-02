import { useState} from "react";
import Color from "./components/Color";

const App = () => {

  const [colorChoice, setColorChoice] = useState("red");
 
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={colorChoice}>{colorChoice}</div>
      </div>
      <div id="colors-list">
        <Color
          color={"yellow"}
          colorChoice={colorChoice}
          setColorChoice={setColorChoice}
        />
        <Color
          color={"green"}
          colorChoice={colorChoice}
          setColorChoice={setColorChoice}
        />
        <Color
          color={"black"}
          colorChoice={colorChoice}
          setColorChoice={setColorChoice}
        />
      </div>
    </div>
  );
};

export default App;
