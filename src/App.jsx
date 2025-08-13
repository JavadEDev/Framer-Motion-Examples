import Header from "./components/Header";
import EmailInbox from "./components/EmailInbox";
import Multistepwizard from "./components/Multistepwizard";
import CarouselSlider from "./components/CarouselSlider";
import ResizablePanel from "./components/ResizablePanel";
import Calendar from "./components/Calendar";
function App() {
  return (
    <>
      <Header />
      <Calendar />
      <ResizablePanel />
      <CarouselSlider />
      <Multistepwizard />
      <EmailInbox />
    </>
  );
}

export default App;
