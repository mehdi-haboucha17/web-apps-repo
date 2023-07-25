import React, { useEffect, useState } from "react";
import "./rightSidePanel.scss";
import ImageLayout from "../left-side-panel/imageLayout";
const RightSidePanel = () => {
  const [data, setdata] = useState([]);
  const getData = () => {
    let jsonData = [
      { image: "", text: "Anass" },
      { image: "", text: "Rodrygue" },
      { image: "", text: "Laura" },
      { image: "", text: "Diana" },
      { image: "", text: "Kelsee" },
      { image: "", text: "Othmane" },
      { image: "", text: "Ilyass" },
      { image: "", text: "Julie" },
      { image: "", text: "Ashley" },
      { image: "", text: "Anesh" },
      { image: "", text: "Chris" },
      { image: "", text: "Paul" },
      { image: "", text: "Peter" },
    ];
    setdata(jsonData);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="right-side-container">
      <div className="right-side-header">Contacts</div>
      <div className="right-side-content">
        {data.map(({ image, text }, index) => (
          <ImageLayout key={index} image={image} text={text} />
        ))}
      </div>
    </div>
  );
};

export default RightSidePanel;
