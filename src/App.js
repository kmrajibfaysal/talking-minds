import { Route, Routes } from 'react-router-dom';
import Footer from './Common/Basic-Components/Footer';
import Header from './Common/Basic-Components/Header';
import RequiredAuth from './Common/RequiredAuth/RequiredAuth';
import AboutMe from './Pages/AboutMe/AboutMe';
import Blog from './Pages/Blog/Blog';
import Checkout from './Pages/Checkout/Checkout';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Services from './Pages/Services/Services';
import SignUp from './Pages/SignUp/SignUp';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route
                    path="/checkout"
                    element={
                        <RequiredAuth>
                            <Checkout />
                        </RequiredAuth>
                    }
                />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/blogs" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
