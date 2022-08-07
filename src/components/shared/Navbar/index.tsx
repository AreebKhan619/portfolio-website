import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  getOnClickAnimationProps,
  getSlideInProps,
} from "../../../assets/constants/motionProps";
import { Strings } from "../../../assets/constants/strings";
import { Hamburger } from "../../../assets/images";
import { breakpoints } from "../../../assets/styles/breakpoints";
import { useMaxWidthQuery } from "../../../hooks/useMediaQuery";
import {
  NavbarOuterContainer,
  NavigationItems,
  PrimaryActionItem,
  Title,
} from "./styled";

import { Link } from "react-scroll";

interface ILink {
  name: string;
  id: string;
  offset?: number;
}

interface DisplayNavItemsProps {
  links: ILink[];
}

const Navbar = () => {
  const isSmallerDisplay = useMaxWidthQuery(breakpoints.tablet);

  const links: ILink[] = [
    {
      name: Strings.overview,
      id: "overview",
      offset: 0,
    },
    {
      name: Strings.experience,
      id: "experience",
    },
    {
      name: Strings.skills,
      id: "skills",
    },
    {
      name: Strings.education,
      id: "education",
    },
  ];

  return (
    <NavbarOuterContainer>
      <Title>{Strings.siteTitle}</Title>
      <NavigationItems>
        {isSmallerDisplay ? (
          <SmallerDisplayNavItems links={links} />
        ) : (
          <LargerDisplayNavItems links={links} />
        )}

        <PrimaryActionItem as={motion.div} {...getOnClickAnimationProps()}>
          {Strings.connect}
        </PrimaryActionItem>
      </NavigationItems>
    </NavbarOuterContainer>
  );
};

const SmallerDisplayNavItems: React.FC<DisplayNavItemsProps> = ({ links }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <button
        className="toggle"
        onClick={() => setIsExpanded((state) => !state)}
      >
        <img src={Hamburger} alt="Hamburger Icon" />
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            key="mobile-links"
            {...getSlideInProps()}
            className="small-nav-container"
          >
            {links.map((link, idx) => (
              <Link
                smooth
                spy
                activeClass="active"
                className="item sm"
                to={link.id}
                key={idx}
                offset={-75}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const LargerDisplayNavItems: React.FC<DisplayNavItemsProps> = ({ links }) => {
  return (
    <>
      {links.map((link, idx) => {
        return (
          <Link
            className="item lg"
            smooth
            spy
            activeClass="active"
            to={link.id}
            key={idx}
            isDynamic={true}
            offset={-95}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
};

export default Navbar;
