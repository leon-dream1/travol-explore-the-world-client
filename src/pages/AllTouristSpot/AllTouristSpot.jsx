import { useLoaderData, useNavigate } from "react-router-dom";

const AllTouristSpot = () => {
  const allTouristSpot = useLoaderData();
  console.log(allTouristSpot);

  const navigate = useNavigate();

  return (
    <div className="container mx-auto my-[100px]">
      <h2 className="text-[40px] text-blue-600 font-bold font-montserrat text-center">
        All Tourist Spot
      </h2>
      <div className="grid grid-cols-3 gap-6">
        {allTouristSpot.map((spot) => (
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
              <span className="block text-[30px] font-medium tracking-widest uppercase dark:text-violet-600">
                {spot.spotName}
              </span>
              <h2 className="text-[16px] font-semibold font-merriweather pt-3 text-amber-600">
                {spot?.season?.toUpperCase()}
              </h2>
              <h2 className="text-xl font-semibold tracking-wide font-raleway text-blue-400 pt-2">
                ${spot.cost}
              </h2>
              <h2 className="text-[19px] font-inter mt-2">
                Travel time:
                <span className="text-xl ml-2 font-semibold text-blue-400 pt-2">
                  {spot.travelTime}days
                </span>
              </h2>
              <h4 className="text-[19px] font-inter mt-2">
                Total Visitor per Year:
                <span className="text-xl ml-2 font-semibold text-blue-400 pt-2">
                  {spot.totalVisitor}
                </span>
              </h4>
            </div>
            <button
              onClick={() => navigate(`/touristSpot/${spot._id}`)}
              className="mt-4 w-full bg-[#425CEC] text-white text-[22px] py-[10px] font-semibold font-merriweather cursor-pointer"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTouristSpot;
