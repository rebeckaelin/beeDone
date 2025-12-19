import "./styles/TodoCard.css";
import bee from "../src/assets/bee_transparent.png";

const TodoCard = () => {
  return (
    <div className="card_container">
      <button className="delete_button">x</button>
      <div className="heading_container">
        <p>task text here, in bold</p>
        <input type="checkbox" name="" id="" />
      </div>
      <p className="category_text">category</p>
      {/* <button className="priority_button">MEDIUM</button> */}

      <div className="priority_container">
        <div className="priority_image">
          <img className="bee_image" src={bee} alt="" height={36} />
          <img className="bee_image" src={bee} alt="" height={36} />
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
