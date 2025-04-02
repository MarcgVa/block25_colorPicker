import { useState} from "react";



const ColorList = ({ colorChoice, setColorChoice }) => {
  
  return <div className={colorChoice} onClick={()=> setColorChoice(colorChoice)}></div>
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
        <ColorList colorChoice={"yellow"} setColorChoice={setColorChoice} />
        <ColorList colorChoice={"green"} setColorChoice={setColorChoice} />
        <ColorList colorChoice={"black"} setColorChoice={setColorChoice} />
      </div>
    </div>
  );
};

export default App;
