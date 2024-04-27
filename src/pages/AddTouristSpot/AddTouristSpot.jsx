import { useForm } from "react-hook-form";

const AddTouristSpot = () => {
  const {
    register,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
//   console.log(errors);
  return (
    <div className="mt-[80px]">
      <h1 className="text-center text-[40px] font-inter text-slate-700 font-medium mb-[40px]">
        Add Your Favorite Spot
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-6 container mx-auto border rounded-lg p-[80px]"
      >
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
            {...register("user-name")}
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Your Email"
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
            {...register("spot-name")}
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
            {...register("spot-location")}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Tourist Spot Image"
            className="input input-bordered w-full"
            {...register("spot-image")}
          />
        </div>
        <div>
          {/* <label className="block">Seasonality</label> */}
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
            {...register("travel-time")}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Average Cost"
            className="input input-bordered w-full"
            {...register("cost")}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Total Visitor Per Year"
            className="input input-bordered w-full"
            {...register("total-visitor")}
          />
        </div>
        <div className="col-span-2">
          <input
            type="text"
            placeholder="Short Description"
            className="input input-bordered w-full"
            {...register("description")}
          />
        </div>
        <div className="col-span-2">
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
