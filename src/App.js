import './App.css';
import { Route, Routes } from "react-router-dom";
import Homepage from './pages/Home/Homepage';
import News from './pages/Business/business';
import Layout from './components/layout';
import Business from './pages/Business/business';
import Entertainment from './pages/Entertainment/entertainment';
import Sports from './pages/Sports/sports';
import Technology from './pages/Technology/technology';

function App() {
  return (
    <div className="sss">
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/business" element={<Business />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
