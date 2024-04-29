import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const AllTouristSpot = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const [allTouristSpot, setAllTouristSpot] = useState(data);
  const [sortBy, setSortBy] = useState(null);

  if (sortBy === "asc") {
    allTouristSpot.sort((a, b) => {
      console.log(a.cost);
      if (parseInt(a.cost) < parseInt(b.cost)) {
        return -1;
      }
      return 0;
    });
  }
  if (sortBy === "desc") {
    allTouristSpot.sort((a, b) => {
      console.log(a.cost);
      if (parseInt(a.cost) > parseInt(b.cost)) {
        return -1;
      }
      return 0;
    });
  }

  return (
    <div className="container mx-auto my-[60px]">
      <div className="text-center">
        <details className="dropdown">
          <summary className="m-1 btn bg-red-600 hover:bg-red-600 text-white">
            Sort
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => setSortBy("asc")}>
              <a>In Ascending</a>
            </li>
            <li onClick={() => setSortBy("desc")}>
              <a>In Descending</a>
            </li>
          </ul>
          {/* <li onClick={() => setSortBy("asc")}>In Ascending</li> */}
          {/* <li onClick={() => setSortBy("desc")}>In Descending</li> */}
        </details>
      </div>
      <h2 className="text-[40px] text-blue-600 font-bold font-montserrat text-center mt-[90px]">
        All Tourist Spot
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-4 md:m-4 lg:m-0 gap-6">
        {allTouristSpot?.map((spot) => (
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
