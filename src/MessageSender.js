import { Avatar } from "@material-ui/core";
import React,{ useState } from "react";
import "./MessageSender.css";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from "./StateProvider";
import db from './firebase';
import firebase from "firebase";
function MessageSender() {
  const[{ user },dispatch]=useStateValue();
  const[input,setInput]=useState('');
  const[imgUrl,setImgUrl]=useState('');

  const handleSubmit=(e)=>{
        e.preventDefault();
        //some db stuff
      db.collection('posts').add({
        message:input,
        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        profilePic:user.photoURL,
        username:user.displayName,
        image:imgUrl,
      })


        setInput("");
        setImgUrl("");
    };
    
  return (
    <div className="messageSender">
      <div className="messageSender_top">
        <Avatar src={user.photoURL}/>
        <form>
          <input
            value={input}
            onChange={e=>setInput(e.target.value)}
            className="messageSender_input"
            placeholder={`What 's on your mind, ${user.displayName} ?`}
          />

          <input 
          value={imgUrl}
          onChange={(e)=>setImgUrl(e.target.value)}
          placeholder={`Image_URL (Optional)`} />
          <button onClick={handleSubmit} type="submit">
            Send
          </button>
        </form>
      </div>
      <div className="messageSender_bottom">
      <div className="messageSender_option">
        <VideocamIcon style={{color:"red"}}/>
        <h3>Live Video</h3>
        </div>
        <div className="messageSender_option">
        <PhotoLibraryIcon style={{color:'green'}}/>
        <h3>Photo/Video</h3>
        </div>
        <div className="messageSender_option">
        <InsertEmoticonIcon style={{color:'orange'}}/>
        <h3>Feeling/Activity</h3>
        </div>
      </div>
      </div>
    );
}

export default MessageSender;
