import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFound from "./pages/not-found/not-found.jsx";
import Promo from "./pages/promo/promo.jsx";
import Now from "./pages/now/now.jsx";
import Results from "./pages/results/results.jsx";
import Dialogs from "./pages/dialogs/dialogs.jsx";
import Favorites from "./pages/favorites/favorites.jsx";
import ButtonDoc from "./documentation/button-doc/button-doc.jsx";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Now/>}/>
                <Route path="/promo" element={<Promo/>}/>
                <Route path="/" element={<Now/>}/>
                <Route path="/results" element={<Results/>}/>
                <Route path="/dialogs" element={<Dialogs/>}/>
                <Route path="/favorites" element={<Favorites/>}/>

                <Route path="/button-doc" element={<ButtonDoc/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
