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

import { WavyLine, WebDev } from "../../assets/images";
import SkillsPossessed from "../../components/overview/skills-possessed";
import TechSkillsList from "../../components/overview/tech-skills";
import { Strings } from "../../assets/constants/strings";

import { motion } from "framer-motion";
import {
  getOnClickAnimationProps,
  getScaleAnimationProps,
  getWaveAnimationProps,
} from "../../assets/constants/motionProps";
import ConnectLinks from "../../components/shared/ConnectLinks";

const statsList = [
  {
    mainStat: "04+",
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

const onResumeDownloadClick = () => {
  window.open("/Areeb Khan - Resume.pdf", "_new");
  window.analytics.track("Resume was downloaded.");
};

const Overview = () => {
  return (
    <OverviewContainer id="overview">
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
          <ConnectLinks
            PrefixComponent={
              <motion.div
                id="resume-link"
                onClick={onResumeDownloadClick}
                {...getOnClickAnimationProps()}
              >
                Download Resume
              </motion.div>
            }
          />
          {/* UI/UX Designing, Prototyping, Web Development */}
          <TechSkillsList />
        </div>
      </LeftPortion>

      <RightPortion>
        <div className="img-container">
          <SkillsPossessed />
          <WaveImgContainer
            className="hero-img"
            as={motion.img}
            src={WebDev}
            alt={Strings.itsMeWaving}
            {...getWaveAnimationProps()}
          />
        </div>
      </RightPortion>
    </OverviewContainer>
  );
};

export default Overview;
