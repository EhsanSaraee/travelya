import tw from 'twin.macro';
import TopSections from './containers/TopSection';

const App = () => {
   return (
      <AppContainer>
         <TopSections />
      </AppContainer>
   );
};

const AppContainer = tw.section`
   flex
   w-full
   h-full
   overflow-hidden
`;

export default App;
