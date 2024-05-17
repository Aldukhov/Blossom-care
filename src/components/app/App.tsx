import classNames from 'classnames';
import React from 'react';
import styles from './App.module.css';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../header/Header';
import Home from '../../pages/home/home';
import Footer from '../footer/Footer';
import About from '../../pages/about/about';
import Ndis from '../../pages/ndis/ndis';
import Contact from '../../pages/contact-us/contact';
import LinvingOptions from '../../pages/services/living-options/livingOptions';
import IndependetLiving from '../../pages/services/independet-living/independetLiving';
import CommunityParticipation from '../../pages/services/community-participation/communityParticipation';
import NursingCare from '../../pages/services/community-Nursing-care/NursingCare';
import SupportCoordination from '../../pages/services/support-coordination/support-coordination';
import PlanManagment from '../../pages/services/plan-managment/planManagment';
import Transport from '../../pages/services/transport/transport';
import Accommodation from '../../pages/services/disability-accommodation/dissabilityAccommodation';
import Blog from '../../pages/blog/blog';
import ScrollToTop from '../../services/auto-scroll/autoScroll';


const App: React.FC = () => {


  return (
    <>
      <HelmetProvider>
        <ScrollToTop />
        <Header />
        <main className={classNames(styles.app)}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/services/community-nursing-care" element={<NursingCare />} />
            <Route path="/services/community-participation" element={<CommunityParticipation />} />
            <Route path="/services/dissability-accommodation" element={<Accommodation />} />
            <Route path="/services/independent-living" element={<IndependetLiving />} />
            <Route path='/services/individualised-living-options' element={<LinvingOptions />} />
            <Route path='/services/plan-management' element={<PlanManagment />} />
            <Route path='/services/support-coordination' element={<SupportCoordination />} />
            <Route path='/services/transport' element={<Transport />} />
            <Route path='/ndis' element={<Ndis />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </HelmetProvider>
    </>
  );
}

export default App;