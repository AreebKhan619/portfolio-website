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
  HeroImgContainer,
  OverviewContainer,
} from "./styled";

import { WavyLine } from "@/assets/images";
import SkillsPossessed from "@/components/overview/skills-possessed";
import TechSkillsList from "@/components/overview/tech-skills";
import { Strings } from "@/assets/constants/strings";

import { motion } from "framer-motion";
import {
  getOnClickAnimationProps,
  getScaleAnimationProps,
  getWaveAnimationProps,
} from "@/assets/constants/motionProps";
import ConnectLinks from "@/components/shared/ConnectLinks";
import { gql, useQuery } from "@apollo/client";
import { HERO_SECTION_DETAILS } from "@/connections/contentfulGraphQlLiterals";
import { IHeroSectionDetails } from "@/ts/connectionModels/response";

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
  window.analytics.track?.("Resume was downloaded.");
};

const Overview = () => {
  const { loading, data } = useQuery<IHeroSectionDetails>(
    gql(HERO_SECTION_DETAILS)
  );

  if (loading || !data?.heroSectionCollection?.items?.[0])
    return <div>Loading...</div>;

  const {
    prefix,
    name,
    suffix,
    mainStatsListCollection,
    highlightedSkills,
    heroImg,
    heroImgSurroundingSkillsCollection,
  } = data?.heroSectionCollection?.items?.[0] ?? {};

  return (
    <OverviewContainer id="overview">
      <LeftPortion>
        <div>
          <HiText>
            <pre>{prefix}</pre>
          </HiText>
          <IntroText>
            <Name as={motion.div} {...getScaleAnimationProps()}>
              {name.firstName} <MainName>{name.middleName}</MainName>{" "}
              {name.lastName}
            </Name>
          </IntroText>
        </div>
        <div>
          <pre>{suffix}</pre>
        </div>
        <StatContainerOuter>
          {mainStatsListCollection.items.map(
            ({ statMainText, subtitleText, sys }) => {
              return (
                <Stat key={sys.id}>
                  <StatHeader>{statMainText}</StatHeader>
                  <StatSubtitle>{subtitleText}</StatSubtitle>
                </Stat>
              );
            }
          )}
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
          <TechSkillsList skills={highlightedSkills} />
        </div>
      </LeftPortion>

      <RightPortion>
        <div className="img-container">
          <SkillsPossessed
            skills={heroImgSurroundingSkillsCollection?.items ?? []}
          />
          <HeroImgContainer
            className="hero-img"
            as={motion.img}
            src={heroImg.url}
            alt={Strings.itsMeWaving}
            {...getWaveAnimationProps()}
          />
        </div>
      </RightPortion>
    </OverviewContainer>
  );
};

export default Overview;
