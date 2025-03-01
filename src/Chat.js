import { Avatar, IconButton } from '@mui/material'
import './Chat.css'
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@mui/icons-material'
import { useEffect, useState } from 'react'
function Chat() {
    const [input, setInput] = useState('')
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log('You typed >>> ', input)

        setInput('')
    }
    return (
        <div className='chat'>
            <div className='chat__header'>
                <Avatar src={`https://api.dicebear.com/7.x/adventurer/svg?${seed}=Zoey`} />

                <div className='chat__headerInfo'>
                    <h3>Room name</h3>
                    <p>Last seen at ...</p>
                </div>

                <div className='chat__headerRight'>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className='chat__body'>
                <p className={`chat__message ${true && 'chat__reciever'}`}>
                    <span className='chat__name'>Sonny Sangha</span>
                    Hey Guys
                    <span className='chat__timestamp'>3:52pm</span>
                </p>
            </div>

            <div className='chat__footer'>
                <InsertEmoticon />
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} placeholder='Type a message' type='text' />
                    <button onClick={sendMessage} type='submit'>Send a message</button>
                </form>
                <Mic />
            </div>
        </div>
    )
}

export default Chat