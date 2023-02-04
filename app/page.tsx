import { Footer, Navbar } from '../src/components';
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from '../src/sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />

    <div className="relative">
      <About />
      <div className="gradient-03" />
      <Explore />
    </div>

    <div className="relative">
      <GetStarted />
      <div className="gradient-04" />
      <WhatsNew />
    </div>
    <World />

    <div className="relative">
      <Insights />
      <div className="gradient-04" />
      <Feedback />
    </div>

    <Footer />
  </div>
);

export default Page;
