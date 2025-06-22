import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Body from './components/Body';
import ReactGA from "react-ga4";
import { useEffect } from 'react';

function HomePage() {
  useEffect(() => {
    // Track page view when HomePage mounts
    ReactGA.send({
      hitType: "pageview",
      page: "/",
      title: "Home Page"
    });
  }, []);

  return (
    <div className="min-h-screen bg-base-200 flex flex-col">
      <Header />
      <Banner />
      <Body />
      <Footer />
    </div>
  );
}

export default HomePage;