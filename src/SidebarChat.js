import { Avatar } from '@material-ui/core'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import db from './firebase'
import './SidebarChat.css'



function SidebarChat({id, name, addNewChat }) {
  const [seed, setSeed] = useState('')
  const [messages, setMessages] = useState([])
  
  useEffect(() => {
    if (id) {
      db.collection('rooms').doc(id).collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => setMessages(snapshot.docs.map(doc => doc.data())))
    }
  }, [id])
     
  useEffect(() => {
    setSeed(Math.trunc(Math.random() * 5000));
  }, [])

  const createChat = () => {
    const roomName = prompt('Kindly enter name for chat');

    if (roomName) {
      // add roomName to database
      db.collection('rooms').add({
        name: roomName
      });
    }
  } 

  console.log(messages);

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
    <div className='sidebarChat'>
        <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}/>
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>{messages[messages.length - 1]?.message}</p>
        </div>
    </div>
    </Link>
  ) : (
    <div className="sidebarChat" onClick={createChat}>
      <h2>Add new Chat</h2>
    </div>
  )
}

export default SidebarChat