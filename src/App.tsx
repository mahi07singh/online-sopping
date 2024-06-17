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
import SportsTShirts from './pages/sports/sports-t-shirt';
import SportsShoes from './pages/sports/sports-shoes';
import SportsArcery from './pages/sports/sports-archery';
import SportsBadminton from './pages/sports/sports-badminton';
import HangingRack from './pages/hanging-rack/hanging-rack';
import SportsMCricketKit from './pages/sports/sports-mcriket-kit';
import GirlProducts from './pages/girls/products';
import GirlKurtiProducts from './pages/girls/girls-products';
import GirlSandalProducts from './pages/girls/girls-sandals';
import GirlSkinCareProducts from './pages/girls/girls-skin-care';
import GirlPandentProducts from './pages/girls/girls-pandent';
import GirlSareeProducts from './pages/girls/girls-sarees';
import GirlBraProducts from './pages/girls/girls-bras';

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
        <Route path="/hanging-rack" element={<HangingRack />} />
        <Route path="/sports-mcricket-kit" element={<SportsMCricketKit />} />
        <Route path="/girls-products" element={<GirlProducts />} />
        <Route path="/jewelry-pendants" element={<GirlPandentProducts />} />
        <Route path="/girls-sandals" element={<GirlSandalProducts />} />
        <Route path="/girls-skin-care" element={<GirlSkinCareProducts />} />
        <Route path="/girls-bras" element={<GirlBraProducts />} />
        <Route path="/girls-sarees" element={<GirlSareeProducts />} />
        <Route path="/girls-kurtis" element={<GirlKurtiProducts />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
