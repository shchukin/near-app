import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from "./pages/main/main.jsx";
import Promo from "./pages/promo/promo.jsx";
import NotFound from "./pages/not-found/not-found.jsx";
import ButtonDoc from "./documentation/button-doc/button-doc.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/near-app/dist" element={<Main/>}/>
                <Route path="/near-app/dist/promo" element={<Promo/>}/>

                <Route path="/near-app/dist/button-doc" element={<ButtonDoc/>}/>

                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
