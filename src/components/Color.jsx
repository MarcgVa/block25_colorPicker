import ColorList from "./colors";

const Color = ({ selectedColor, setSelectedColor }) => {

  return(
    ColorList &&
    ColorList.map((color) => {
      return (
        <div key={color}
          className={`${color} ${selectedColor === color ? "selected" : null}`}
          onClick={() => setSelectedColor(color)}
        ></div>
      );
    })
  )
}

export default Color