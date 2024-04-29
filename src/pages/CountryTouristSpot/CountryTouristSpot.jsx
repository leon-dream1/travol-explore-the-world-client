import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CountryTouristSpot = () => {
  const [selectedCountrySpot, setSelectedCountrySpot] = useState([]);

  const { countryName } = useParams();
  console.log(countryName);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/countryAllSpot/${countryName}`)
      .then((res) => res.json())
      .then((data) => setSelectedCountrySpot(data));
  }, []);

  
console.log(selectedCountrySpot);
  return (
    <div className="container mx-auto my-[100px]">
      <h2 className="text-[40px] text-blue-600 font-bold font-montserrat text-center">
        All Tourist Spot of {selectedCountrySpot[0]?.country}
      </h2>
      <div className="grid grid-cols-3 gap-6">
        {selectedCountrySpot.map((spot) => (
          <div
            key={spot._id}
            className="max-w-sm p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 mt-[50px]"
          >
            <img
              src={spot.spotImage}
              alt={spot.spotName}
              className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">
                {spot.spotName}
              </span>
              <h2 className="text-[25px] font-semibold tracking-wide">
                {spot.spotLocation}
              </h2>
              <h2 className="text-[16px] font-semibold font-merriweather pt-3 text-amber-600">
                {spot?.season?.toUpperCase()}
              </h2>

              <h2 className="text-xl font-semibold tracking-wide font-raleway text-blue-400 pt-2">
                ${spot.cost}
              </h2>
            </div>
            <p className="dark:text-gray-800 pb-6">
              {spot.description.slice(0, 160)}.........
            </p>
            <button
              onClick={() => navigate(`/countryTouristSpot/${spot._id}`)}
              className="w-full bg-[#425CEC] text-white text-[22px] py-[10px] font-semibold font-merriweather cursor-pointer"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryTouristSpot;
