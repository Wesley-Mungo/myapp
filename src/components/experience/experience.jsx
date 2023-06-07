import React from "react";
import "./experience.css";
 //import ListExperiences from "./components/experience/ListExperience";
import ListExperiences from "./ListExperience";
export const experience = () => {
  return (
    <section id="experience">
       <div className="experience__me__content">
       <h2>My Experience</h2>
     </div> <h5>I'm skills in buiding impactfully solution to the communities</h5>
      
      <div className="container experience__container">
        <ListExperiences />
      </div>
    </section>
  );
};
export default experience;