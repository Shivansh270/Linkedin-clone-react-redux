import React, { useState } from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SendIcon from '@mui/icons-material/Send';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import "./Post.css"
import { Avatar } from '@mui/material';
import InputOption from './InputOption';
  
const Post = ({sender, description, message, photoUrl}) => {

  return (
    <div className="post">
        <div className="post-header">
          <Avatar src={photoUrl}>{sender[0]}</Avatar>
          <div className="postInfo">
            <h2>{sender}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="post-body">
          <p>{message}</p>
        </div>
        <div className="post-buttons">
          <InputOption Icon={ThumbUpIcon} title="Like" color="gray" />
          <InputOption Icon={CommentIcon} title="Comment" color="gray" />
          <InputOption Icon={ShareIcon} title="Share" color="gray" />
          <InputOption Icon={SendIcon} title="Send" color="gray" />
        </div>
    </div>
  )
}

export default Post