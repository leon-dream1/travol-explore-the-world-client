import { useEffect, useState } from "react";

const CountrySection = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/countries")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  });
  return (
    <div className="container mx-auto my-[100px]">
      <h2 className="text-[40px] text-blue-600 font-bold font-montserrat text-center">
        Country Information
      </h2>
      <div className="grid grid-cols-3 gap-6">
        {countries.map((country) => (
          <div
            key={country._id}
            className="max-w-sm rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 mt-[50px]"
          >
            <img
              src={country.country_image}
              alt={country.country_name}
              className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="mt-6 mb-2 p-3">
              <span className="block text-[25px] font-medium tracking-widest uppercase dark:text-violet-600">
                {country.country_name}
              </span>
              <p className="dark:text-gray-800 pb-6">
                {country.description.slice(0, 300)}.........
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountrySection;
