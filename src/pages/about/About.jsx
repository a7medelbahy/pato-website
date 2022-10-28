import PageHeader from "../../components/PageHeader";
import AboutImg from "../../images/heading-page-02.jpg";
import "./about.css";
import AboutStory from "./components/AboutStory";
import Video from "./../../components/Video";
import AboutVideo from "../../images/Restaurant Promo Video.mp4";
import AboutRecipe from "./components/AboutRecipe";
import AboutRomantic from "./components/AboutRomantic";
import AboutDiscover from "./components/AboutDiscover";
import AboutChefs from "./components/AboutChefs";
const About = () => {
  return (
    <div className="about">
      <PageHeader HeaderImg={AboutImg} HeaderTitle="ABOUT US" />
      <AboutStory />
      <Video myVideo={AboutVideo} />
      <AboutRecipe />
      <AboutRomantic />
      <AboutDiscover />
      <AboutChefs />
    </div>
  );
};

export default About;
