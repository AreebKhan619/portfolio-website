import { GitHub } from "../../assets/images";
import LibrariesUsed from "../../components/shared/LibrariesUsed";
import {
  HrefLink,
  PageTitle,
} from "../../components/shared/SharedStyledComponents/styled";
import { certificationsList, projectsList, skillsList } from "../../data";
import { SkillsOuterContainer } from "./styled";

const SkillsAndPersonalProjects = () => {
  return (
    <SkillsOuterContainer id="skills" className="inner-padding" circleColor={"#c8d8ff61"}>
      <div className="left-filler-img" />
      <PageTitle>Skills &amp; Personal Projects</PageTitle>
      <div className="content-container">
        {/* Personal Projects */}
        <div className="bold">Personal Projects</div>
        <ol className="content-list">
          {projectsList.map(
            ({ name, description, skillsList, link, repoLink }, idx) => {
              return (
                <li className="list-item" key={idx}>
                  <div className="name dashed-underline">{name}</div>
                  <div>{description}</div>
                  {link && (
                    <HrefLink href={link}>
                      See it live in action: {link}
                    </HrefLink>
                  )}
                  {repoLink && (
                    <HrefLink href={repoLink}>
                      <img
                        className="repo-icon"
                        src={GitHub}
                        alt={"repository"}
                      />
                    </HrefLink>
                  )}
                  {skillsList && (
                    <div className="libraries-used">
                      <LibrariesUsed list={skillsList} />
                    </div>
                  )}
                </li>
              );
            }
          )}
        </ol>
      </div>

      <div className="content-container">
        <div className="bold">Certifications</div>
        <ol className="content-list">
          {certificationsList.map(({ name, description, link }, idx) => {
            return (
              <li className="list-item" key={idx}>
                <a
                  href={link}
                  target={"_blank"}
                  rel={"noreferrer"}
                  className="name alternate dashed-underline"
                >
                  {name}
                </a>
                <div>{description}</div>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="content-container">
        <div className="bold">Skills &amp; Languages</div>
        <LibrariesUsed hideTitle={true} list={skillsList} />
      </div>
    </SkillsOuterContainer>
  );
};

export default SkillsAndPersonalProjects;
