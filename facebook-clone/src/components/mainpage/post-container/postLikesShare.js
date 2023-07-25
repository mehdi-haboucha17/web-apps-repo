import React from "react";

const PostLikesShare = ({ src, text }) => {
  return (
    <>
      <div className="post-likes-box">
        <div className="post-likes-box-image-container">
          <img src={src} alt={text} />
        </div>
        <div className="post-likes-box-text">{text}</div>
      </div>
    </>
  );
};

export default PostLikesShare;
