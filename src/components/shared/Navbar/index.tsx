import { motion } from "framer-motion";
import { getOnClickAnimationProps } from "../../../assets/constants/motionProps";
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
      </NavigationItems>
    </NavbarOuterContainer>
  );
};

const SmallerDisplayNavItems: React.FC<DisplayNavItemsProps> = () => {
  return <div>Hamburger</div>;
};

const LargerDisplayNavItems: React.FC<DisplayNavItemsProps> = ({ links }) => {
  return (
    <>
      {links.map((link, idx) => {
        return <Item key={idx}>{link.name}</Item>;
      })}
      <PrimaryActionItem as={motion.div} {...getOnClickAnimationProps()}>
        {Strings.connect}
      </PrimaryActionItem>
    </>
  );
};

export default Navbar;
