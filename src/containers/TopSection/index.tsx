import { Link } from 'react-scroll';
import styled from 'styled-components';
import tw from 'twin.macro';
import Navbar from '../../components/Navbar';
import BackgroundImage from '../../images/indonesia-high-res.jpg';
import { BsArrowDownCircle } from 'react-icons/bs';

const TopSections = () => {
   return (
      <TopSectionContainer>
         <LandingSection>
            <Navbar />
            <InfoSection>
               <FloatingText>WORLD</FloatingText>
               <FloatingText style={{ display: 'inline-flex' }}>
                  OF
                  <OutlinedTextSvg viewBox="0 0 530 100">
                     <text>PARADISE,</text>
                  </OutlinedTextSvg>
               </FloatingText>
               <FloatingText>INDONESIA.</FloatingText>
               <DescriptionText>
                  Let's explore of the third largest countries in the world,
                  namely indonesia. Enjoy 3 vacation packages at competitive
                  prices and strong soul.
               </DescriptionText>
            </InfoSection>
            <ViewMoreButton>
               <Link to="explore" smooth="easeInOutQuad" duration={1000}>
                  <BsArrowDownCircle />
               </Link>
            </ViewMoreButton>
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

const InfoSection = tw.section`
   absolute
   top[150px]
   left-3
   lg:top[150px]
   lg:right-10
   lg:left-auto
   2xl:right-60
   2xl:top[240px]
   2xl:left-auto
`;

const FloatingText = tw.h1`
   m-0
   font-black
   text-white
   font-size[60px]
   line-height[25px]
   lg:font-size[125px]
   lg:line-height[90px]
   2xl:font-size[170px]
   2xl:line-height[125px]
   font-family['Archivo Narrow']
   flex
   items-center
`;

const OutlinedTextSvg = styled.svg`
   font: bold 100px Century 'Archivo Narrow', Arial;
   ${tw`
         width[550px]
         height[100px]
         lg:width[580px]
         lg:height[110px]
         2xl:width[550px]
         2xl:height[100px]
         flex
      `}
   overflow: overlay;

   text {
      max-height: 100%;
      flex: 1;
      fill: none;
      stroke: white;
      stroke-width: 2px;
      stroke-linejoin: round;
      z-index: 10;
      ${tw`
            transform[translateY(71px)]
            lg:transform[translateY(97px)]
            2xl:transform[translateY(113px)]
         `}
      text-shadow: 0 0 0 rgba(255, 255, 255, 0.5);
   }
`;

const DescriptionText = tw.p`
   text-xl
   lg:text-lg
   text-white
   text-opacity-80
   mt-10
   max-w-sm
   lg:max-w-lg
   2xl:max-w-xl
`;

const ViewMoreButton = tw.button`
   absolute
   bottom-4
   left-1/2
   -translate-x-1/2
   text-white
   text-4xl
   transition-colors
   duration-200
   hover:text-green-400
`;

export default TopSections;
