import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-scroll';
import tw from 'twin.macro';
import Logo from '../Logo';
import { deviceSize } from '../Responsive';
import { slide as Menu } from 'react-burger-menu';
import menuStyles from './menuStyles';
import styled from 'styled-components';

const Navbar = () => {
   const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

   return (
      <NavbarContainer>
         <Logo />
         {isMobile && (
            <Menu right styles={menuStyles}>
               <NavList>
                  <NavItem>
                     <Link to="home">Home</Link>
                  </NavItem>
                  <NavItem>
                     <Link to="explore">Explore</Link>
                  </NavItem>
                  <NavItem>
                     <Link to="travel-places">Travel Places</Link>
                  </NavItem>
               </NavList>
            </Menu>
         )}
         {!isMobile && (
            <NavList>
               <NavItem>
                  <Link to="home">Home</Link>
               </NavItem>
               <NavItem>
                  <Link to="explore">Explore</Link>
               </NavItem>
               <NavItem>
                  <Link to="travel-places">Travel Places</Link>
               </NavItem>
            </NavList>
         )}
      </NavbarContainer>
   );
};

const NavbarContainer = styled.nav`
   width: 90%;
   ${tw`
      flex
      h-20
      pr-6
      pl-6
      pt-4
      border-b-2
      border-gray-200
      border-opacity-50
      items-center
      self-center
  `}
`;

const NavList = tw.ul`
  list-none
  w-full
  h-auto
  lg:w-auto
  lg:h-full
  lg:ml-20
  flex
  justify-center
  items-center
`;

const NavItem = tw.li`
  lg:mr-8
  flex
  justify-center
  items-center
  min-h-full
  text-white
  cursor-pointer
  font-medium
  text-lg
  lg:text-base
  transition-colors
  transition-duration[300ms]
  hover:text-gray-200
  box-content
  mb-2
  lg:mb-0
`;

export default Navbar;
