import { Route, Routes } from 'react-router-dom';
import Footer from './Common/Basic-Components/Footer';
import Header from './Common/Basic-Components/Header';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<Home />} />
                <Route path="/services" element={<Home />} />
                <Route path="/contact" element={<Home />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
