import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateSpot = () => {
  const [selectedSpot, setSelectedSpot] = useState({});
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
    // reset,
  } = useForm();

  useEffect(() => {
    fetch(`http://localhost:5000/touristSpot/${id}`)
      .then((res) => res.json())
      .then((data) => setSelectedSpot(data));
  }, []);

  const onSubmit = (data) => {
    const updatedSpot = data;
    console.log(updatedSpot);
    fetch(`http://localhost:5000/touristSpot/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedSpot),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.modifiedCount) {
          toast.success("Congratulation!!!!! Updated Info Successfully.....");
        }
      });
  };

  return (
    <div className="mt-[80px]">
      <h1 className="text-center text-[40px] font-inter text-blue-700 font-medium mb-[40px]">
        Update Your Favorite Spot Information
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-6 container mx-auto border rounded-lg p-[80px]"
      >
        <div>
          <input
            type="text"
            placeholder="Tourist Spot Name"
            className="input input-bordered w-full"
            value={selectedSpot.spotName}
            required
            {...register("spotName")}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Tourist Spot Country Name"
            className="input input-bordered w-full"
            value={selectedSpot.country}
            required
            {...register("country")}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Location"
            className="input input-bordered w-full"
            value={selectedSpot.spotLocation}
            required
            {...register("spotLocation")}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Tourist Spot Image"
            className="input input-bordered w-full"
            value={selectedSpot.spotImage}
            required
            {...register("spotImage")}
          />
        </div>
        <div>
          <select
            className="input input-bordered w-full"
            value={selectedSpot.season}
            {...register("season")}
          >
            <option value="winter">Winter</option>
            <option value="summer">Summer</option>
            <option value="spring">Spring</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            placeholder="Travel Time in days"
            className="input input-bordered w-full"
            value={selectedSpot.travelTime}
            {...register("travelTime")}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Average Cost"
            className="input input-bordered w-full"
            value={selectedSpot.cost}
            {...register("cost")}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Total Visitor Per Year"
            className="input input-bordered w-full"
            value={selectedSpot.totalVisitor}
            {...register("totalVisitor")}
            required
          />
        </div>
        <div className="col-span-2">
          <input
            type="text"
            placeholder="Short Description"
            className="input input-bordered w-full"
            value={selectedSpot.description}
            {...register("description")}
            required
          />
        </div>
        <div className="col-span-2">
          <input
            type="submit"
            value="UPDATE"
            className="input input-bordered w-full bg-[#425CEC] text-white text-[22px] font-semibold font-merriweather cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateSpot;
