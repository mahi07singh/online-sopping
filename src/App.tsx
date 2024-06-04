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
import LedTv from './pages/led';
import Freezes from './pages/freezes';
import SportsTShirts from './pages/sports-t-shirt';
import SportsShoes from './pages/sports-shoes';
import SportsArcery from './pages/sports-archery';
import SportsBadminton from './pages/sports-badminton';
import SportsWCricketKit from './pages/sports-wcriket-kit';
import SportsMCricketKit from './pages/sports-mcriket-kit';
import GirlProducts from './pages/products';

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
        <Route path="/led-television" element={<LedTv />} />
        <Route path="/freezes" element={<Freezes />} />
        <Route path="/sports-t-shirts" element={<SportsTShirts />} />
        <Route path="/sports-spike-shoes" element={<SportsShoes />} />
        <Route path="/sports-archery" element={<SportsArcery />} />
        <Route path="/sports-badminton" element={<SportsBadminton />} />
        <Route path="/sports-wcricket-kit" element={<SportsWCricketKit />} />
        <Route path="/sports-mcricket-kit" element={<SportsMCricketKit />} />
        <Route path="/girls-products" element={<GirlProducts />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
