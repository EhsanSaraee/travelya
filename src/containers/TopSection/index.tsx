import styled from 'styled-components';
import tw from 'twin.macro';
import Navbar from '../../components/Navbar';
import BackgroundImage from '../../images/indonesia-high-res.jpg';

const TopSections = () => {
   return (
      <TopSectionContainer>
         <LandingSection>
            <Navbar />
         </LandingSection>
      </TopSectionContainer>
   );
};

const TopSectionContainer = tw.div`
  w-full
  h-screen
  flex
  flex-col
  relative
`;

const LandingSection = styled.div`
   ${tw`
      w-full
      h-screen
      flex
      flex-col
      bg-gradient-to-l
      from-blue-600
      to-gray-600
      bg-cover
      bg-no-repeat

   `}
   background-image: url(${BackgroundImage});
   background-position: bottom 10% left;
   background-blend-mode: overlay;
`;

export default TopSections;
