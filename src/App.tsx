import tw from 'twin.macro';
import Footer from './components/Footer';
import ExploreSection from './containers/ExploreSection';
import TopSections from './containers/TopSection';

const App = () => {
   return (
      <AppContainer>
         <TopSections />
         <ExploreSection />
         <Footer />
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
