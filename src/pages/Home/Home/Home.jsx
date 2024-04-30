import Banner from "../Banner/Banner";
import CountrySection from "../CountrySection/CountrySection";
import Marketing from "../Marketing/Marketing";
import TouristSpot from "../TouristSpot/TouristSpot";
import Video from "../Video/Video";

const Home = () => {
  return (
    <div>
      <Banner />
      <TouristSpot />
      <CountrySection />
      <Marketing />
      <Video />
    </div>
  );
};

export default Home;
