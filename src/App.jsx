import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from "./pages/main/main.jsx";
import Promo from "./pages/promo/promo.jsx";
import NotFound from "./pages/not-found/not-found.jsx";
import ButtonDoc from "./documentation/button-doc/button-doc.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Main/>}/>
                <Route path="/promo" element={<Promo/>}/>

                <Route path="/button-doc" element={<ButtonDoc/>}/>

                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
