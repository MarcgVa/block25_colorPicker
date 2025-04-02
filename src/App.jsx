import { useState} from "react";
import Color from "./components/Color";



const App = () => {

  const [selectedColor, setSelectedColor] = useState("red");
 
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
       <Color selectedColor = {selectedColor} setSelectedColor={setSelectedColor}/>
      </div>
    </div>
  );
};

export default App;
