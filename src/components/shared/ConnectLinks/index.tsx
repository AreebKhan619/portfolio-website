import { getOnClickAnimationProps } from "../../../assets/constants/motionProps";
import { GitHub, LinkedIn, GMail, StackOverflow } from "../../../assets/images";
import { motion } from "framer-motion";
import { LinksContainerStyled } from "./styled";

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

interface IConnectLinksProps {
  PrefixComponent?: JSX.Element;
}

const ConnectLinks: React.FC<IConnectLinksProps> = ({ PrefixComponent }) => {
  return (
    <LinksContainerStyled className="links-container">
      {PrefixComponent}
      {links.map((el, idx) => {
        return (
          <motion.div key={idx} {...getOnClickAnimationProps()}>
            <a
              className="link"
              href={el.url}
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                window.analytics.track(
                  `Visited social media profile: ` + el.name
                )
              }
            >
              <img style={{ width: 45 }} src={el.imgUri} alt={el.name} />
            </a>
          </motion.div>
        );
      })}
    </LinksContainerStyled>
  );
};

export default ConnectLinks;
