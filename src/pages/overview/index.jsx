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
  ImageAndSkills,
} from "./styled";

import { Hi, WavyLine } from "../../assets/images";
import SkillsPossessed from "../../components/overview/skills-posssessed";
import TechSkillsList from "../../components/overview/tech-skills";

const Overview = () => {
  return (
    <OverviewContainer>
      <LeftPortion>
        <div>
          <HiText>Hi,</HiText>
          <IntroText>
            I'm{" "}
            <Name>
              Mohammad <MainName>Areeb</MainName> Khan
            </Name>
          </IntroText>
        </div>
        <div>and I'm a full stack developer, experienced in MERN.<br/> Nice to see you here :{")"}</div>
        <StatContainerOuter>
          <Stat>
            <StatHeader>03+</StatHeader>
            <StatSubtitle>Years of experience</StatSubtitle>
          </Stat>
          <Stat>
            <StatHeader>5+</StatHeader>
            <StatSubtitle>Courses &amp; Certifications</StatSubtitle>
          </Stat>
          <Stat>
            <StatHeader>13+</StatHeader>
            <StatSubtitle>Projects</StatSubtitle>
          </Stat>
        </StatContainerOuter>
        <div style={{ margin: "20px 0 40px", textAlign: "center" }}>
          <img style={{ height: 45 }} src={WavyLine} alt="It's me waving :)" />
        </div>
        <div id="second_half">
          <div style={{ margin: "20px 0" }}>
            <div>Resume, GitHub, LinkedIn, Stackoverflow, Email</div>
          </div>
          {/* UI/UX Designing, Prototyping, Web Development */}
          <TechSkillsList />
        </div>
      </LeftPortion>

      <RightPortion>
        <ImageAndSkills>
          <SkillsPossessed />
          {/* Replace .gif with .avif with gif as fallback */}
          <WaveImgContainer src={Hi} alt="It's me waving :)" />
        </ImageAndSkills>
      </RightPortion>
    </OverviewContainer>
  );
};

export default Overview;
