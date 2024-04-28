import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const MyList = () => {
  const [mySpot, setMySpot] = useState([]);

  const { user } = useContext(AuthContext);

    const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/myTouristSpot/${user.email}`)
      .then((res) => res.json())
      .then((data) => setMySpot(data));
  }, []);

  

  return (
    <div className="container mx-auto my-[100px]">
      <h2 className="text-[40px] text-blue-600 font-bold font-montserrat text-center">
        Your Favorite Spot
      </h2>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800 mt-[20px]">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="dark:bg-gray-300">
              <tr className="text-left">
                <th className="p-3">No.</th>
                <th className="p-3">Name</th>
                <th className="p-3">Country</th>
                <th className="p-3">Season</th>
                <th className="p-3">Amount</th>
                <th className="p-3"></th>
                <th className="p-3"></th>
              </tr>
            </thead>
            <tbody>
              {mySpot.map((spot, idx) => (
                <tr
                  key={spot._id}
                  className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
                >
                  <td className="p-3 text-xl font-merriweather">
                    <p>{idx + 1}</p>
                  </td>
                  <td className="p-3 text-xl font-merriweather">
                    <p>{spot.spotName}</p>
                  </td>
                  <td className="p-3 text-xl font-merriweather">
                    <p>{spot.country}</p>
                  </td>
                  <td className="p-3 text-xl font-merriweather">
                    <p>{spot.season?.toUpperCase()}</p>
                  </td>
                  <td className="p-3  text-xl font-merriweather">
                    <p>${spot?.cost}</p>
                  </td>
                  <td className="p-3">
                    <span
                    onClick={() => navigate(`/updateSpot/${spot._id}`)}
                      className="px-4 py-2 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50 cursor-pointer"
                    >
                      <span>Update</span>
                    </span>
                  </td>

                  <td className="p-3 ">
                    <span className="px-4 py-2 font-semibold rounded-md dark:bg-red-600 dark:text-gray-50 cursor-pointer">
                      <span>Delete</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyList;
