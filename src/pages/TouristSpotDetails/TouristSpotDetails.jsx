import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TouristSpotDetails = () => {
  const [selectedSpot, setSelectedSpot] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://travol-explore-the-world-server.vercel.app/touristSpot/${id}`)
      .then((res) => res.json())
      .then((data) => setSelectedSpot(data));
  }, []);
  
  console.log(selectedSpot);
  return (
    <div className="container mx-auto mt-[150px]">
      <div className="grid grid-cols-2 gap-8 items-center">
        <div>
          <img src={selectedSpot.spotImage} alt="" className="rounded-md w-full" />
        </div>
        <div>
          <div className="mt-6 mb-2">
            <span className="block text-[50px] font-medium tracking-widest uppercase dark:text-violet-600">
              {selectedSpot.spotName}
            </span>
            <h2 className="text-[25px] font-semibold tracking-wide">
              {selectedSpot.spotLocation}
            </h2>
            <h2 className="text-xl font-semibold font-merriweather pt-3 text-amber-600">
              {selectedSpot?.season?.toUpperCase()}
            </h2>

            <h2 className="text-xl font-semibold tracking-wide font-raleway text-blue-400 pt-2">
              ${selectedSpot.cost}
            </h2>
            <h2 className="text-[19px] font-inter mt-2">
              Travel time:
              <span className="text-xl ml-5 font-semibold text-blue-400 pt-2">
                {selectedSpot.travelTime}days
              </span>
            </h2>
            <h4 className="text-[19px] font-inter mt-2">
              Total Visitor per Year:
              <span className="text-xl ml-5 font-semibold text-blue-400 pt-2">
                {selectedSpot.totalVisitor}
              </span>
            </h4>
          </div>
          <p className="dark:text-gray-800 pb-6 text-stone-600">
            {selectedSpot.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TouristSpotDetails;
