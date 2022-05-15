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

import { Hi, WavyLine } from "../../assets/images";

const Overview = () => {
  return (
    <OverviewContainer>
      <LeftPortion>
        <div>
          <HiText>Hi,</HiText>
          <IntroText>
            I'm{" "}
            <Name>
              Mohammad <MainName>Areeb</MainName> Khan.
            </Name>
          </IntroText>
        </div>
        <div>
          and I'm a full stack developer, experienced in MERN for 3+ years.
        </div>
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
          <div>
            Skill Capsules Here - UI/UX Designing, Prototyping, Development
          </div>
        </div>
      </LeftPortion>

      <RightPortion>
        {/* Replace .gif with .avif with gif as fallback */}
        <WaveImgContainer src={Hi} alt="It's me waving :)" />
      </RightPortion>
    </OverviewContainer>
  );
};

export default Overview;
