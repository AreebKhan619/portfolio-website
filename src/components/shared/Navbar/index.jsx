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
        <Item>{Strings.overview}</Item>
        <Item>{Strings.experience}</Item>
        <Item>{Strings.education}</Item>
        <PrimaryActionItem>{Strings.connect}</PrimaryActionItem>
      </NavigationItems>
    </NavbarOuterContainer>
  );
};

export default Navbar;