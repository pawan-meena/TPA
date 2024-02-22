import React, { useState, useEffect, useContext } from "react";
import ElevatingIdea from "./ElevatingIdea/index";
import WhatWeDo from "./WhatWeDo/index";
import HowWeOperate from "./HowWeOperate/index";
import HowToOperate from "./HowToOperate/index";
import Services from "./Services/index";
import Articles from "./Articles/index";
import LetsTalk from "./LetsTalk/index";
import Team from "./Team/index";
import About from "./AboutPTA/index";
import { Link, animateScroll as scroll } from "react-scroll";
import client from "../lib/sanity";

const HomePage = () => {
  const [sectionNo, setSectionNo] = useState(1);
  const [theme, setTheme] = useState({});
  const [elevatingIdeaData, setElevatingIdeaData] = useState([]);
  const [whatWeDoData, setWhatWeDoData] = useState([]);
  const [howWeOperate, setHowWeOperate] = useState([]);
  const [letsTalkData, setLetsTalkData] = useState([]);
  const [teamData, setTeamData] = useState([]);
  const [howToOperateData, setHowToOperateData] = useState([]);
  const [servicesData, setServicesData] = useState([]);
  const [articlesData, setArticlesData] = useState([]);
  const [aboutPTAData, setAboutPTAData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          themeResult,
          elevatingIdeaResult,
          whatWeDoResult,
          howWeOperate,
          letsTalk,
          team,
          howToOperate,
          services,
          articles,
          aboutPTA,
        ] = await Promise.all([
          client.fetch('*[_type == "theme"]'),
          client.fetch('*[_type == "elevating"]'),
          client.fetch('*[_type == "whatWeDo"]'),
          client.fetch('*[_type == "howWeOperate"]'),
          client.fetch('*[_type == "letsTalk"]'),
          client.fetch('*[_type == "team"]'),
          client.fetch('*[_type == "howToOperate"]'),
          client.fetch('*[_type == "services"]'),
          client.fetch('*[_type == "articles"]'),
          client.fetch('*[_type == "aboutPTA"]'),
        ]);

        setTheme(themeResult[0]);
        setElevatingIdeaData(elevatingIdeaResult[0]);
        setWhatWeDoData(whatWeDoResult[0]);
        setHowWeOperate(howWeOperate[0]);
        setLetsTalkData(letsTalk[0]);
        setTeamData(team[0]);
        setHowToOperateData(howToOperate[0]);
        setServicesData(services[0]);
        setArticlesData(articles[0]);
        setAboutPTAData(aboutPTA[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Link to="elevatingIdea" smooth duration={500}>
        <ElevatingIdea elevatingIdeaData={elevatingIdeaData} />
      </Link>
      <Link to="whatWeDo" smooth duration={500}>
        <WhatWeDo whatWeDoData={whatWeDoData} />
      </Link>
      <Link to="howWeOperate" smooth duration={500}>
        <HowWeOperate howWeOperate={howWeOperate} />
      </Link>
      <Link to="howToOperate" smooth duration={500}>
        <HowToOperate howToOperateData={howToOperateData} />
      </Link>
      <Link to="services" smooth duration={500}>
        <Services servicesData={servicesData} />
      </Link>
      <Link to="articles" smooth duration={500}>
        <Articles articlesData={articlesData} />
      </Link>
      <Link to="about" smooth duration={500}>
        <About aboutPTAData={aboutPTAData} />
      </Link>
      <Link to="team" smooth duration={500}>
        <Team teamData={teamData} />
      </Link>
      <Link to="letsTalk" smooth duration={500}>
        <LetsTalk letsTalkData={letsTalkData} />
      </Link>
    </div>
  );
};

export default HomePage;
