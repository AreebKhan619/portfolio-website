import { ExperienceOuterContainer } from "./styled";

import Timeline from "../../components/shared/Timeline";
import { PageTitle } from "../../components/shared/SharedStyledComponents/styled";
import {
  Biscoe,
  Flask,
  GECA,
  Keras,
  ReactJS,
  SemanticUI,
  TensorFlow,
} from "../../assets/images";
import { GenericObject } from "../../ts";

const Experience = () => {
  const education = [
    {
      duration: "July '17 - Oct '20",
      role: "Bachelors in Computer Science (B.E - C.S.E)",
      institutionName: "Government College of Engineering, Aurangabad",
      institutionURL: "(External Link Indicator)",
      companyLogo: GECA,
      rolesAndResponsibilities: [
        "CGPA: 7.6",
        {
          text: "Final Year Project",
          subPoints: [
            "Plant-based disease detection and prevention system using Machine Learning",
          ],
          link: "https://github.com/AreebKhan619/PlantDiseaseDetection",
          list: [
            {
              icon: ReactJS,
              link: null,
              title: "ReactJS",
            },
            {
              icon: SemanticUI,
              link: null,
              title: "Semantic UI",
            },
            {
              icon: Flask,
              link: null,
              title: "Flask",
            },
            {
              icon: TensorFlow,
              link: null,
              title: "TensorFlow",
            },
            {
              icon: Keras,
              link: null,
              title: "Keras",
            },
          ],
        },
        "Runner up, Web Quest (Techfest event) 2017, 2018",
        "Winner, Spell Your Brain 2018, 2019",
      ],
    },
    {
      duration: "Nov '13 - Nov '15",
      role: "HSC (12th)",
      institutionName: "Tyndale Biscoe School",
      institutionURL: "(External Link Indicator)",
      companyLogo: Biscoe,
      rolesAndResponsibilities: [
        "Got 120th position state-wide; Was awarded a national scholarship in the aforementioned college for my performance.",
      ],
    },
    {
      duration: "Nov '02 - Nov '13",
      role: "SSC (10th)",
      institutionName: "Tyndale Biscoe School",
      institutionURL: "(External Link Indicator)",
      companyLogo: Biscoe,
      rolesAndResponsibilities: [
        "Scored 20th position state-wide",
        "Actively participated in extra-curricular activities, represented school in Art Competitions",
      ],
    },
  ];

  return (
    <ExperienceOuterContainer className="inner-padding">
      <PageTitle>Education</PageTitle>
      <TimelineWrapper education={education} />
      <div className="additional-content">
        Got 1103<sup>rd</sup> position in state-level entrance exams.
      </div>
    </ExperienceOuterContainer>
  );
};

const TimelineWrapper = ({ education }: { education: GenericObject[] }) => {
  const events = education.map((edu) => ({
    range: edu.duration,
    title: edu.role,
    subtitle: edu.institutionName,
    eventImg: edu.companyLogo,
    points: edu.rolesAndResponsibilities,
  }));

  return <Timeline events={events} />;
};

export default Experience;
