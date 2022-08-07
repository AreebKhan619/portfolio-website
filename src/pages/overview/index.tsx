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
    url: "https://github.com/AreebKhan619",
  },
  {
    name: "LinkedIn",
    imgUri: LinkedIn,
    url: "https://linkedin.com/in/mareebkhan",
  },
  {
    name: "GMail",
    imgUri: GMail,
    url: "mailto:areebkhan619@gmail.com",
  },
  {
    name: "StackOverflow",
    imgUri: StackOverflow,
    url: "https://stackoverflow.com/users/7343008/areeb-khan",
  },
];

const statsList = [
  {
    mainStat: "03+",
    subtitle: Strings.yearsOfExperience,
  },
  {
    mainStat: "5+",
    subtitle: Strings.coursesAndCerts,
  },
  {
    mainStat: "13+",
    subtitle: Strings.projects,
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
          {statsList.map(({ mainStat, subtitle }, idx) => {
            return (
              <Stat key={idx}>
                <StatHeader>{mainStat}</StatHeader>
                <StatSubtitle>{subtitle}</StatSubtitle>
              </Stat>
            );
          })}
        </StatContainerOuter>
        <div className="wavy-line-container">
          <img src={WavyLine} alt={"divider"} />
        </div>
        <div id="second-half">
          <div className="links-container">
            <motion.div
              id="resume-link"
              onClick={() => window.open("/Areeb Khan - Resume.pdf", "_new")}
              {...getOnClickAnimationProps()}
            >
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
