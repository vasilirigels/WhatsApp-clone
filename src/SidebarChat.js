import { Avatar } from '@mui/material';
import './SidebarChat.css';
import { useEffect, useState } from 'react';
function SidebarChat({ addNewChat }) {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, []);

    const createChat = () => {
        const roomName = prompt('Please enter name for chat');

        if (roomName) {

        }
    }
    return !addNewChat ? (
        <div className='sidebarChat'>
            <Avatar src={`https://api.dicebear.com/7.x/${seed}/svg`} />
            <div className='sidebarChat__info'>
                <h2>Room name</h2>
                <p>Last message...</p>
            </div>
        </div>
    ) : (
        <div onClick={createChat} className='sidebarChat'>
            <h2>Add new Chat</h2>
        </div>
    )
}

export default SidebarChat  