import { Avatar, Paper } from "@mui/material";
import React from "react";
import likes from "../../../images/likes.png";
import likeButton from "../../../images/like.png";
import shareButton from "../../../images/share.png";
import commentButton from "../../../images/comment.png";
import PostLikesShare from "./postLikesShare";
import "../upload-selection/uploadSelection.scss";

const Post = ({ object }) => {
  const { description, user_name, like, post_img } = object;
  return (
    <div>
      <Paper className="post-container">
        {/* header*/}
        <div className="post-header">
          <div className="post-header-avatar-container">
            <Avatar className="post-header-avatar" />
          </div>
          <div className="post-header-name-container">{user_name}</div>
        </div>
        {/* description*/}
        <div className="post-description">{description}</div>
        {/* image*/}
        <div className="post-image">
          <img src={post_img} alt={post_img} width="600px" />
        </div>
        {/* like count*/}
        <div className="post-likes-container">
          <div className="post-likes-image">
            <img src={likes} alt="likes" />
          </div>
          <div className="post-likes-text">{like}</div>
        </div>
        {/* like share box*/}
        <div className="post-likes-box-container">
          <PostLikesShare src={likeButton} text="Like" />
          <PostLikesShare src={commentButton} text="Comment" />
          <PostLikesShare src={shareButton} text="Share" />
        </div>
        {/* comment box*/}
        <div className="post-comment-box">
          <div className="upload-selection-top">
            <div>
              <Avatar className="upload-selection-img" />
            </div>
            <div>
              <input
                className="upload-selection-box"
                type="text"
                placeholder="What's on your mind ?"
              />
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Post;
