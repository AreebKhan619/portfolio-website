import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  getOnClickAnimationProps,
  getSlideInProps,
} from "../../../assets/constants/motionProps";
import { Strings } from "../../../assets/constants/strings";
import { breakpoints } from "../../../assets/styles/breakpoints";
import { useMaxWidthQuery } from "../../../hooks/useMediaQuery";
import {
  Item,
  NavbarOuterContainer,
  NavigationItems,
  PrimaryActionItem,
  Title,
} from "./styled";

interface ILink {
  name: string;
}

interface DisplayNavItemsProps {
  links: ILink[];
}

const Navbar = () => {
  const isSmallerDisplay = useMaxWidthQuery(breakpoints.tablet);

  const links: ILink[] = [
    {
      name: Strings.overview,
    },
    {
      name: Strings.experience,
    },
    {
      name: Strings.skills,
    },
    {
      name: Strings.education,
    },
    {
      name: Strings.testimonials,
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
        style={{ order: 1 }}
        onClick={() => setIsExpanded((state) => !state)}
      >
        Hamburger
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            key="mobile-links"
            {...getSlideInProps()}
            className="small-nav-container"
          >
            {links.map((link, idx) => (
              <div className="item" key={idx}>
                {link.name}
              </div>
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
        return <Item key={idx}>{link.name}</Item>;
      })}
    </>
  );
};

export default Navbar;
