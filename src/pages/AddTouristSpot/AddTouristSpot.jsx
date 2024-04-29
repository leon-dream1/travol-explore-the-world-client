import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

const AddTouristSpot = () => {
  const {
    register,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
    reset,
  } = useForm();

  const { user } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);

    const newSpot = data;
    fetch("https://travol-explore-the-world-server.vercel.app/touristSpot", {
      method: "POST",
      body: JSON.stringify(newSpot),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          toast.success("Congratulation!!!!! Spot is added SuccessFully.....");
          reset();
        }
      });
  };
  //   console.log(errors);
  return (
    <div className="mt-[40px] md:p-[60px] lg:mt-[80px]">
      <h1 className="text-center text-[20px] md:text-[30px] lg:text-[40px] font-inter text-blue-700 font-medium mb-[40px]">
        Add Your Favorite Spot
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto border rounded-lg p-[20px] md:p-[40px] lg:p-[80px]"
      >
        <div>
          <input
            type="text"
            placeholder="Your Name"
            defaultValue={user.displayName}
            className="input input-bordered w-full"
            {...register("userName")}
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Your Email"
            defaultValue={user.email}
            className="input input-bordered w-full"
            {...register("email")}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Tourist Spot Name"
            className="input input-bordered w-full"
            required
            {...register("spotName")}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Tourist Spot Country Name"
            className="input input-bordered w-full"
            required
            {...register("country")}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Location"
            className="input input-bordered w-full"
            required
            {...register("spotLocation")}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Tourist Spot Image"
            className="input input-bordered w-full"
            required
            {...register("spotImage")}
          />
        </div>
        <div>
          <select
            className="input input-bordered w-full"
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
            {...register("travelTime")}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Average Cost"
            className="input input-bordered w-full"
            {...register("cost")}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Total Visitor Per Year"
            className="input input-bordered w-full"
            {...register("totalVisitor")}
            required
          />
        </div>
        <div className="md:col-span-2">
          <input
            type="text"
            placeholder="Short Description"
            className="input input-bordered w-full"
            {...register("description")}
            required
          />
        </div>
        <div className="md:col-span-2">
          <input
            type="submit"
            value="ADD"
            className="input input-bordered w-full bg-[#425CEC] text-white text-[22px] font-semibold font-merriweather cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default AddTouristSpot;
