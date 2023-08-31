import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from "./components/button/button.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

        <div style={{ maxWidth: "600px", margin: "0 auto" }}>

            <h1>.button</h1>

            <h3>white</h3>

            <Button theme="white">
                Найти любимое место
            </Button>

            <br/>
            <br/>
            <h3>shadow-white</h3>


            <Button theme="shadow-white">
                Найти любимое место
            </Button>

            <br/>
            <br/>
            <h3>black</h3>
            <div style={{backgroundColor: "#000000", padding: "20px"}}>

                <Button theme="black">
                    Найти любимое место
                </Button>

            </div>
            <br/>
            <h3>shadow-black</h3>
            <div style={{backgroundColor: "#000000", padding: "20px"}}>

                <Button theme="shadow-black">
                    Найти любимое место
                </Button>

            </div>
        </div>
    </>
  )
}

export default App
