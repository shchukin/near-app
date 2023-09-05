import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Now from "./pages/now/now.jsx";
import Promo from "./pages/promo/promo.jsx";
import NotFound from "./pages/not-found/not-found.jsx";
import ButtonDoc from "./documentation/button-doc/button-doc.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Now/>}/>
                <Route path="/promo" element={<Promo/>}/>

                <Route path="/button-doc" element={<ButtonDoc/>}/>

                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
