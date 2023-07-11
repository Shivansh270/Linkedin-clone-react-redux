import React, { useEffect, useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import './Feed.css';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import InputOption from './InputOption';
import Post from './Post';
import { db } from '../../firebase';
 
import firebase from 'firebase/compat';

function Feed() {

  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });

    return () => {
      unsubscribe();
    };
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection('posts')
      .add({
        sender: 'shivansh',
        description: 'hello',
        message: input,
        photoUrl: '',
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setInput('');
      })
      .catch((error) => {
        console.error('Error adding post:', error);
      });
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOption">
          <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#7E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
        </div>
      </div>

    
        {posts.map(({ id, data }) => (
          <Post
            key={id}
            sender={data.sender}
            description={data.description}
            message={data.message}
            photoUrl={data.photoUrl}
          />
        ))}
      
    </div>
  );
}

export default Feed;
