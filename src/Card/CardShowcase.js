import React from "react";
import Card from "./Card";

const CardShowcase = () => {
  return (
    <div className="grid-container">
      <Card
        title="Portfolio Site"
        technologies={["React", "CSS", "JavaScript"]}
        image="https://via.placeholder.com/150"
        siteLink="https://example.com"
        codeLink="https://github.com/example"
      />
    </div>
  );
};

export default CardShowcase;