import './Sidebar.css'
import { Avatar, IconButton } from '@mui/material'
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@mui/icons-material'
import SidebarChat from './SidebarChat'
import { useState } from 'react'
// import db from './fireBase.js'

function Sidebar() {
    const [rooms, setRooms] = useState([]);

    // useEffect(() => {
    //     db.collection('rooms').onSnapshot(snapshot => (
    //         setRooms(snapshot.docs.map(doc =>
    //         ({
    //             id: doc.id,
    //             data: doc.data(),
    //         })
    //         ))
    //     ))
    // }, [])

    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <Avatar />
                <div className='sidebar__headerRight'>
                    <IconButton>
                        <DonutLarge />
                    </IconButton>
                    <IconButton>
                        <Chat />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className='sidebar__search'>
                <div className='sidebar__searchContainer'>
                    <SearchOutlined />
                    <input placeholder='Search or start new chat' type='text' />
                </div>
            </div>

            <div className='sidebar__chats'>
                <SidebarChat addNewChat />
                {rooms.map(room => (
                    <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar