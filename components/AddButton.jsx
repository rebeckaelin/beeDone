import "./styles/AddButton.css";

const AddButton = ({ onOpen }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    if (onOpen) onOpen();
  };

  return (
    <div className="hex_btn_container">
      <button className="hex_btn" aria-label="Add" onClick={handleClick}>
        add new task
      </button>
    </div>
  );
};

export default AddButton;
