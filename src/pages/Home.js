import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner/Banner";

const Home = () => (
  <div>
    <Hero hero="defaultHero">
      <Banner title="luxurious rooms" subtitle="delux room starting at $299">
        <Link to="/rooms" className="btn-primary">
          our rooms
        </Link>
      </Banner>
    </Hero>
  </div>
);

export default Home;
