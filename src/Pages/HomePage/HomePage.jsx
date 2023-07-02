import React from "react";
import Hero from "./Hero";
import Jump from "./Jump";
import FeatureOne from "../TokenApi/FeatureOne";
import Dailystats from "./Dailystats";
import Card from "./Card";
import AdvertCard from "./AdvertCard";
import DevSection from "./DevSection";
import BlogSection from "./BlogSection";

const home = () => {
  return (
    <section className=" flex flex-col items-center justify-center">
      <Hero />
      <Dailystats />
      <FeatureOne />
      <Card />
      <DevSection />
      <AdvertCard />
      <BlogSection/>
    </section>
  );
};

export default home;
