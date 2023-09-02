import {useNavigate} from "react-router";
import HeroHeader from "./HeroHeader";
import SubHeader from "./SubHeader";
const Header = () => {
  const navigate= useNavigate();
  return (
    <>
      <HeroHeader/>
      <SubHeader/>
    </>
  );
};

export default Header;


