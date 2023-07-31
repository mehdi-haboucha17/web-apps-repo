import React, { useEffect, useState } from "react";
import "./leftSidePanel.scss";
import ImageLayout from "./imageLayout";
import covid from "../../../images/covid.png";
import group from "../../../images/groups.png";
import memories from "../../../images/memories.png";
import messenderKids from "../../../images/messengerKids.png";
// import adCentre from "../../../images/Adcentre.png";
import blood from "../../../images/blood.jpg";
import business from "../../../images/business.png";

const LeftSidePanel = () => {
  const [data, setdata] = useState([]);
  const getData = () => {
    let jsonData = [
      { image: covid, text: "Covid-19 Information Centre" },
      { image: group, text: "Friends" },
      { image: memories, text: "Memories" },
      { image: messenderKids, text: "Messender Kids" },
      // { image: adCentre, text: "Ad Centre" },
      { image: blood, text: "Blood Donation" },
      { image: business, text: "Business" },
      //
    ];
    setdata(jsonData);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="left-side-container">
      {data.map(({ image, text }, index) => (
        <ImageLayout key={index} image={image} text={text} />
      ))}
    </div>
  );
};

export default LeftSidePanel;
