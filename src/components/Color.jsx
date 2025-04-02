

const Color = ({ color, colorChoice, setColorChoice }) => {
  return (
    <div
      className={`${color} ${colorChoice === color ? "selected" : null}`}
      onClick={() => setColorChoice(color)}
    ></div>
  );
};
export default Color