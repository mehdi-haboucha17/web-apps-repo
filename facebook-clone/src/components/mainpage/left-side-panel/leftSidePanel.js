import React, { useEffect, useState } from "react";
import "./leftSidePanel.scss";
import ImageLayout from "./imageLayout";
import covid from "../../../images/covid.png";
import group from "../../../images/groups.png";
import memories from "../../../images/memories.png";
import messengerKids from "../../../images/messenger.svg";
import blood from "../../../images/feelings.png";
const LeftSidePanel = () => {
  const [data, setdata] = useState([]);
  const getData = () => {
    let jsonData = [
      { image: covid, text: "Covid-19 Information Centre" },
      { image: group, text: "Friends" },
      { image: memories, text: "Memories" },
      //   { image: messengerKids, text: "Messenger Kids" },
      //   { image: "", text: "Ad Centre" },
      //   { image: "", text: "Ads Manager" },
      //   { image: blood, text: "Blood Donation" },
      //   { image: "", text: "Business Manager" },
      //   { image: "", text: "Climate Science Information Centre" },
      //   { image: "", text: "Community Help" },
      //   { image: "", text: "Events" },
      //   { image: "", text: "Films" },
      //   { image: "", text: "Friend Lists" },
    ];
    setdata(jsonData);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data.map(({ image, text }, index) => (
        <ImageLayout key={index} image={image} text={text} />
      ))}
    </div>
  );
};

export default LeftSidePanel;
