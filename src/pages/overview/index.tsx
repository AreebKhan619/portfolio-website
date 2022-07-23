import {
  HiText,
  LeftPortion,
  RightPortion,
  IntroText,
  MainName,
  Name,
  StatHeader,
  StatSubtitle,
  StatContainerOuter,
  Stat,
  WaveImgContainer,
  OverviewContainer,
} from "./styled";

import {
  WavyLine,
  GitHub,
  LinkedIn,
  GMail,
  StackOverflow,
  WebDev,
} from "../../assets/images";
import SkillsPossessed from "../../components/overview/skills-possessed";
import TechSkillsList from "../../components/overview/tech-skills";
import { Strings } from "../../assets/constants/strings";

import { motion } from "framer-motion";
import {
  getOnClickAnimationProps,
  getScaleAnimationProps,
  getWaveAnimationProps,
} from "../../assets/constants/motionProps";

const links = [
  {
    name: "GitHub",
    imgUri: GitHub,
    url: "https://www.github.com",
  },
  {
    name: "LinkedIn",
    imgUri: LinkedIn,
    url: "https://www.github.com",
  },
  {
    name: "GMail",
    imgUri: GMail,
    url: "https://www.github.com",
  },
  {
    name: "StackOverflow",
    imgUri: StackOverflow,
    url: "https://www.github.com",
  },
];

const Overview = () => {
  return (
    <OverviewContainer>
      <LeftPortion>
        <div>
          <HiText>{Strings.hi}</HiText>
          <IntroText>
            <Name as={motion.div} {...getScaleAnimationProps()}>
              Mohammad <MainName>Areeb</MainName> Khan
            </Name>
          </IntroText>
        </div>
        <div>
          {Strings.welcomeTextSuffix1}
          <br /> {Strings.welcomeTextSuffix2}
        </div>
        <StatContainerOuter>
          <Stat>
            <StatHeader>03+</StatHeader>
            <StatSubtitle>{Strings.yearsOfExperience}</StatSubtitle>
          </Stat>
          <Stat>
            <StatHeader>5+</StatHeader>
            <StatSubtitle>{Strings.coursesAndCerts}</StatSubtitle>
          </Stat>
          <Stat>
            <StatHeader>13+</StatHeader>
            <StatSubtitle>{Strings.projects}</StatSubtitle>
          </Stat>
        </StatContainerOuter>
        <div className="wavy-line-container">
          <img src={WavyLine} alt={"divider"} />
        </div>
        <div id="second-half">
          <div className="links-container">
            <motion.div id="resume-link" {...getOnClickAnimationProps()}>
              Download Resume
            </motion.div>
            {links.map((el, idx) => {
              return (
                <motion.div key={idx} {...getOnClickAnimationProps()}>
                  <a
                    className="link"
                    href={el.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img style={{ width: 45 }} src={el.imgUri} alt={el.name} />
                  </a>
                </motion.div>
              );
            })}
          </div>
          {/* UI/UX Designing, Prototyping, Web Development */}
          <TechSkillsList />
        </div>
      </LeftPortion>

      <RightPortion>
        <div className="img-and-skills">
          <SkillsPossessed />
          {/* Replace .gif with .avif with gif as fallback */}
          <div className="img-container">
            <WaveImgContainer
              className="hero-img"
              as={motion.img}
              src={WebDev}
              alt={Strings.itsMeWaving}
              {...getWaveAnimationProps()}
            />
          </div>
        </div>
      </RightPortion>
    </OverviewContainer>
  );
};

export default Overview;
