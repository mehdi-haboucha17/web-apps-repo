import React, { useEffect, useState } from "react";
import "./postContainer.scss";
import Post from "./post";

const PostContainer = () => {
  const [data, setdata] = useState([]);
  const getData = () => {
    const jsonData = [
      {
        id: 1,
        user_id: 52466,
        user_image: "url...",
        user_name: "Mehdi",
        description: "Love this wallpaper",
        post_img: "url ",
        like: 25,
      },
      {
        id: 2,
        user_id: 52467,
        user_image: "url...",
        user_name: "Anass",
        description: "Peace and Joke",
        post_img: "mehdi",
        like: 5,
      },
    ];
    setdata(jsonData);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="post-contaner-parent">
      {data.map((item, index) => (
        <Post key={index} object={item} />
      ))}
    </div>
  );
};

export default PostContainer;
