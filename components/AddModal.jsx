import "./styles/AddModal.css";
import bee from "../src/assets/bee_transparent.png";
import { useState } from "react";

const AddModal = ({ closeModal, onSave }) => {
  const [priority, setPriority] = useState(null);
  return (
    <>
      <div className="modal">
        <div className="header_container">
          <h2>Add task</h2>
          <button
            className="close_button"
            onClick={closeModal}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="input_container">
          <label htmlFor="taskTitle">Task</label>
          <input
            type="text"
            id="taskTitle"
            placeholder="What needs to bee done?"
          />
        </div>
        <div className="input_container">
          <label htmlFor="taskLabel">Label</label>
          <select id="taskLabel">
            <option value=""></option>
            <option value="Home">Home</option>
            <option value="Food">Food</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <p>Choose a priority</p>
        <div className="button_container">
          <button
            className={`button_flex ${priority === "low" ? "active" : ""}`}
            onClick={() => setPriority("low")}
          >
            <img className="bee_image" src={bee} alt="" height={36} />
            low
          </button>

          <button
            className={`button_flex ${priority === "medium" ? "active" : ""}`}
            onClick={() => setPriority("medium")}
          >
            <div>
              <img className="bee_image" src={bee} alt="" height={36} />
              <img className="bee_image" src={bee} alt="" height={36} />
            </div>
            medium
          </button>

          <button
            className={`button_flex ${priority === "high" ? "active" : ""}`}
            onClick={() => setPriority("high")}
          >
            <div>
              <img className="bee_image" src={bee} alt="" height={36} />
              <img className="bee_image" src={bee} alt="" height={36} />
              <img className="bee_image" src={bee} alt="" height={36} />
            </div>
            high
          </button>
        </div>
        {/* <div className="modal_wrapper"></div> */}
        <button className="save_button">SAVE TO HIVE </button>
      </div>
    </>
  );
};

export default AddModal;
