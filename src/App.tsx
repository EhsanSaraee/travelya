import tw from 'twin.macro';
import ExploreSection from './containers/ExploreSection';
import TopSections from './containers/TopSection';

const App = () => {
   return (
      <AppContainer>
         <TopSections />
         <ExploreSection />
      </AppContainer>
   );
};

const AppContainer = tw.section`
   flex
   flex-col
   w-full
   h-full
   overflow-hidden
`;

export default App;
