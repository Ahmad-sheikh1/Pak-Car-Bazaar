import DashboardSlider from "./component/DashboardSlider/DashboardSlider";
import CarsByCategory from "./component/CarsByCategory/CarsByCategory";
import HowItWorks from "./component/HowItWorks/HowItWorks";
import OurServices from "./component/Servies/OurServices";
import FAQs from "./component/Faq/Faq";
import BlogsOverview from "./component/BlogsOverview/BlogsOverview";
import Blogs from "./component/BlogsOverview/Blogs";


export default function Home() {
  return (
    <>
      <DashboardSlider />
      <HowItWorks />
      <CarsByCategory />
      <OurServices />
      <Blogs />
      <FAQs />
    </>
  );
}
