import { useState} from "react";



const ColorList = ({ color, colorChoice, setColorChoice }) => {  
  return <div className={`${color} ${colorChoice === color ? "selected" : null}`} onClick={() => setColorChoice(color)}></div>
}



const App = () => {

  const [colorChoice, setColorChoice] = useState("red");
 
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={colorChoice}>{colorChoice}</div>
      </div>
      <div id="colors-list">
        <ColorList
          color={"yellow"}
          colorChoice={colorChoice}
          setColorChoice={setColorChoice}
        />
        <ColorList
          color={"green"}
          colorChoice={colorChoice}
          setColorChoice={setColorChoice}
        />
        <ColorList
          color={"black"}
          colorChoice={colorChoice}
          setColorChoice={setColorChoice}
        />
      </div>
    </div>
  );
};

export default App;
