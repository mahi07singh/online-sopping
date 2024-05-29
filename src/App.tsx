import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';
import Header from './component/common/header';
import Footer from './component/common/footer';
import PrivacyPolicy from './pages/privacy-policy';
import TermsCondition from './pages/terms-conditions';
import Help from './pages/help';
import Cookies from './pages/cookies';
import MobilePhones from './pages/mobile-phone';
import Camera from './pages/camera';
import WifiAdapter from './pages/wifi-adapter';
import Subwoofer from './pages/subwoofer';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsCondition />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/help" element={<Help />} />
        <Route path="/mobile-phones" element={<MobilePhones />} />
        <Route path="/camera" element={<Camera />} />
        <Route path="/wifi-adapter" element={<WifiAdapter />} />
        <Route path="/soundbar-subwoofer" element={<Subwoofer />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
