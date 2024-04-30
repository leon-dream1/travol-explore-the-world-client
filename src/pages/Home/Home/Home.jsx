import Banner from "../Banner/Banner";
import CountrySection from "../CountrySection/CountrySection";
import Marketing from "../Marketing/Marketing";
import TouristSpot from "../TouristSpot/TouristSpot";

const Home = () => {
  return (
    <div>
      <Banner />
      <TouristSpot />
      <CountrySection />
      <Marketing />
    </div>
  );
};

export default Home;
