import '../styles/App.css';
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout";
import Home from '../views/home';
import About from '../views/about';
import Contact from '../views/contact';
import Destinations from '../views/destinations';
import FrequentQuestions from '../views/frequent-questions';
import TravelPackages from '../views/travel-packages';

import NoPage from '../views/no-page';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact/>} />
        <Route path="/destinations" exact element={<Destinations/>} />
        <Route path="/frequent-questions" exact element={<FrequentQuestions/>} />
        <Route path="/travel-packages" exact element={<TravelPackages/>} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
