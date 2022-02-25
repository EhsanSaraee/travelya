import tw from 'twin.macro';
import Navbar from '../../components/Navbar';

const TopSections = () => {
   return (
      <TopSectionContainer>
         <Navbar />
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

export default TopSections;
