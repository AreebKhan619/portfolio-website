import { motion } from "framer-motion";
import { getOnClickAnimationProps } from "../../../assets/constants/motionProps";
import { Strings } from "../../../assets/constants/strings";
import {
  Item,
  NavbarOuterContainer,
  NavigationItems,
  PrimaryActionItem,
  Title,
} from "./styled";

const Navbar = () => {
  return (
    <NavbarOuterContainer>
      <Title>{Strings.siteTitle}</Title>
      <NavigationItems>
        <Item style={{ fontWeight: "bold" }}>{Strings.overview}</Item>
        <Item>{Strings.experience}</Item>
        <Item>{Strings.skills}</Item>
        <Item>{Strings.education}</Item>
        <Item>{Strings.testimonials}</Item>
        <PrimaryActionItem as={motion.div} {...getOnClickAnimationProps()}>
          {Strings.connect}
        </PrimaryActionItem>
      </NavigationItems>
    </NavbarOuterContainer>
  );
};

export default Navbar;
