import { NavLink } from "react-router-dom";
import logo from "../../public/logo.png";

const Footer = () => {
  return (
    <div className="pt-[80px] bg-slate-600 mt-[100px]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center mb-6 text-center md:text-start p-0 md:p-10 lg:p-0">
        <div className="">
          <p className="text-[28px] font-merriweather font-medium">
            <img src={logo} alt="" className="mx-auto md:mx-0"/>
          </p>
          <p className="text-[20px] font-inter mt-2">
            Discover Your Next Adventure: Your Trusted Tourism Management
            Partner
          </p>
          <p className="text-[14px] font-raleway text-white mt-5">
            Embark on unforgettable journeys with our comprehensive tourism
            management services. From meticulously planned itineraries to
            personalized experiences, we specialize in crafting moments that
            linger in memory. Let us be your compass in the world of exploration
            and discovery.
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-start space-y-4 text-[18px] lg:pl-10">
          <h6 className="footer-title text-white">Services</h6>
          <NavLink to={"/"} className="link link-hover text-white">
            Home
          </NavLink>
          <NavLink to={"/login"} className="link link-hover text-white">
            Login
          </NavLink>
          <NavLink to={"/register"} className="link link-hover text-white">
            Register
          </NavLink>
          <NavLink to={"/blog"} className="link link-hover text-white">
            Add Tourist Spot
          </NavLink>
          <NavLink to={"/blog"} className="link link-hover text-white">
            All Tourist Spot
          </NavLink>
        </div>
        <div className="flex flex-col items-center lg:items-start space-y-4 text-[18px] text-white">
          <h6 className="footer-title">Social</h6>
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Github</a>
        </div>
        <div className="space-y-4 text-[18px] text-white">
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control">
            <label className="">
              <span className="text-center font-merriweather">
                Enter your email address
              </span>
            </label>
            <div className="join mt-4 mx-auto md:mx-0">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </div>
      </div>
      <footer className="footer footer-center py-8 bg-slate-600 text-base-content text-[16px]">
        <aside>
          <p className="text-white"> Copyright © 2024 - All right reserved by TRAVOL</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
