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

import {
  Hi,
  WavyLine,
  GitHub,
  LinkedIn,
  GMail,
  StackOverflow,
} from "../../assets/images";
import SkillsPossessed from "../../components/overview/skills-posssessed";
import TechSkillsList from "../../components/overview/tech-skills";
import { Strings } from "../../assets/constants/strings";

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
            {Strings.iAm}{" "}
            <Name>
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
        <div style={{ margin: "20px 0", textAlign: "center" }}>
          <img style={{ height: 45 }} src={WavyLine} alt={"divider"} />
        </div>
        <div id="second_half">
          <div style={{ margin: "20px 0", display: "flex", columnGap: 10 }}>
            <div
              style={{
                backgroundColor: "black",
                display: "inline-block",
                color: "white",
                alignSelf: "center",
                padding: "10px 15px",
                borderRadius: "10px",
                fontSize: 15,
              }}
            >
              Download Resume
            </div>
            {links.map((el) => {
              return (
                <a href={el.url}>
                  <img style={{ width: 45 }} src={el.imgUri} alt={el.name} />
                </a>
              );
            })}
          </div>
          {/* UI/UX Designing, Prototyping, Web Development */}
          <TechSkillsList />
        </div>
      </LeftPortion>

      <RightPortion>
        <ImageAndSkills>
          <SkillsPossessed />
          {/* Replace .gif with .avif with gif as fallback */}
          <WaveImgContainer src={Hi} alt={Strings.itsMeWaving} />
        </ImageAndSkills>
      </RightPortion>
    </OverviewContainer>
  );
};

export default Overview;
