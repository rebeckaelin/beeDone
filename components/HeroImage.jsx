import mainImage from "../src/assets/mainImage.png";
import "./styles/HeroImage.css";

const HeroImage = () => {
  return (
    <div className="image_container">
      <img src={mainImage} alt="hero image of a bee holding a pen" />
      {/* <p>Drop your tasks here, worker bee!</p> */}
      <p>The hive awaits your next task</p>
    </div>
  );
};

export default HeroImage;
