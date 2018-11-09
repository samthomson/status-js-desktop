// @flow
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleSharp';

const ChatBox = ({ username, message }) => (
  <ListItem>
    <Avatar>
      <ChatBubbleOutline />
    </Avatar>
    <ListItemText primary={`${username}`} secondary={message} />
  </ListItem>
);

export default ChatBox;
