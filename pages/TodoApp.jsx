import "../pages/styles/TodoApp.css";
import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import AddButton from "../components/AddButton";
import AddModal from "../components/AddModal";
import hive from "../src/assets/bees_hive_transparent.png";
import { useState } from "react";
import TodoCard from "../components/TodoCard";
import HiveButton from "../components/HiveButton";

const TodoApp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleSave = (todoData) => {
    console.log("Saved todo:", todoData);
    closeModal();
  };

  return (
    <div className="main_container">
      <Header />
      {!isModalOpen && <HeroImage />}
      <HiveButton label="Hive" />
      <TodoCard />
      {isModalOpen && (
        <AddModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          onSave={handleSave}
        />
      )}
      <div className="wrapper">
        <div className="bee_hive">
          <img src={hive} alt="" />
        </div>
        <AddButton onOpen={toggleModal} />
      </div>
    </div>
  );
};

export default TodoApp;
