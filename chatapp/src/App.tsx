import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [soket, setSoket] = useState()
  const inputRef = useRef()
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    console.log(ws);

    setSoket(ws);

    ws.onmessage = (ev) => {
      alert(ev.data)
    }

  }, [])

  function sendMessage() {
    const message = inputRef.current.value
    soket.send(message)
  }

  return (
    <>
      <div></div>
      <div>
        <input ref={inputRef} type="text" />
        <button type="submit" onClick={() => { sendMessage() }}>Send</button>
      </div>
    </>
  )
}

export default App
