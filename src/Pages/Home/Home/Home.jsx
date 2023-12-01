import AboutUs from "../AboutUs/AboutUs";
import Album from "../Album/Album";
import Banner from "../Banner/Banner";
import Cta from "../CTA/Cta";
import Categories from "../Categories/Categories";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <Cta />
      <AboutUs />
      <Album />
    </div>
  );
};

export default Home;
