import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from "./pages/main/main.jsx";
import Promo from "./pages/promo/promo.jsx";
import NotFound from "./pages/not-found/not-found.jsx";

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'


function App() {


    return (

        <BrowserRouter>
            <Routes>
                <Route path="/near-app/dist" element={<Main/>}/>
                <Route path="/near-app/dist/promo" element={<Promo/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
