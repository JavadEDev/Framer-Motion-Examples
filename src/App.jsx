import Header from "./components/Header";
import EmailInbox from "./components/EmailInbox";
import Multistepwizard from "./components/Multistepwizard";
import CarouselSlider from "./components/CarouselSlider";
import ResizablePanel from "./components/ResizablePanel";
function App() {
  return (
    <>
      <Header />
      <ResizablePanel />
      <CarouselSlider />
      <Multistepwizard />
      <EmailInbox />
    </>
  );
}

export default App;
