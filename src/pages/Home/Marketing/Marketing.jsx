import { FaPhone } from "react-icons/fa6";
import about from "../../../../public/about.jpeg";

const Marketing = () => {
  return (
    <div className="container mx-auto mt-[80px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div className="p-4 text-center lg:text-start">
          <h4 className="text-[15px] md:text-[30px] text-blue-300 font-raleway">
            THE BEST TRAVEL AGENCY
          </h4>
          <p className="text-[25px] md:text-[55px] text-[#131313] font-bold font-merriweather">
            DISCOVER THE WORLD WITH OUR{" "}
            <span className="text-blue-300">GUIDE</span>
          </p>
          <p className="text-[18px] font-medium font-inter text-slate-400">
            You can choose any country with good tourism. Agency is responsible
            to make the world closer to you.Our team members are available to
            assist clients with their queries, concerns, and feedback promptly.
            We strive to ensure that every interaction leaves a positive
            impression.
          </p>
          <div className="flex flex-col lg:flex-row items-center mt-[40px] gap-6">
            <FaPhone size={40} />
            <div>
              <p className="text-[25px] font-montserrat">For Information</p>
              <p className="text-blue-400 font-bold">+01883434341</p>
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <img src={about} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Marketing;
