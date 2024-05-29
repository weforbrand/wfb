import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/Navbar/navbar";
import HeroSection from "../src/HeroSection/herosection";
import Body from "../src/Body/body";
import Industry from "../src/Industry/industry";
import Process from "../src/Process/process";
import CTAComponent from "../src/CTA/cta";
import WhyUs from "../src/WhyUs/whyUs";
import FAQ from "../src/FAQ/faq";
import Contact from "../src/Contact/contact";
import Footer from "../src/Footer/footer";
import "./App.css";

const Posts = React.lazy(() => import("../src/Blog/posts"));
const PostDetails = React.lazy(() => import("../src/BlogPost/PostDetails"));

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/body" element={<Body />} />
          {/* Use Suspense to show a loading indicator while Posts component is loading */}
          <Route
            path="/blog"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Posts />
              </Suspense>
            }
          />
          <Route path="/industry" element={<Industry />} />
          <Route path="/process" element={<Process />} />
          <Route path="/cta" element={<CTAComponent />} />
          <Route path="/whyus" element={<WhyUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route
            path="/blog/:slug"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <PostDetails />
              </Suspense>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Body />
      <Industry />
      <Process />
      <CTAComponent />
      <WhyUs />
      <Contact />
      <FAQ />
    </div>
  );
};

export default App;
