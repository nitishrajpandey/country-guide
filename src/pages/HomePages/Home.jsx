import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFilterData, fetchCountryGuide } from "../../store/countryDataSlice";
import { nanoid } from "nanoid";
import { fetchCountryDetails } from "../../store/countryDetailsSlice";
import { Link } from "react-router-dom";
import Loding from "../../components/Loder/Loding";

function Home() {
  const originalData = useSelector(
    (state) => state.countryData.countryDataCollection
  );

  const loding = useSelector((state) => state.countryData.lodingStatus);
  console.log(loding);

  const filterDataValue = useSelector(
    (state) => state.countryData.filterDataStore
  );
  console.log(filterDataValue);
  const dispatch = useDispatch();

  const searchElement = useRef();

  useEffect(() => {
    dispatch(fetchCountryGuide());
  }, []);

  const handelOnChangeCard = () => {
    const searchQuery = searchElement.current.value.toLowerCase();
    const filteredData = originalData.filter((item) =>
      item?.name?.official.toLowerCase().includes(searchQuery)
    );
    dispatch(addFilterData(filteredData));
  };

  const handelOnClickRegions = (event) => {
    console.log(event.target.value);
    const filterQuery = event.target.value;
    const filteredData = originalData.filter((item) =>
      item?.continents?.includes(filterQuery)
    );
    dispatch(addFilterData(filteredData));
  };

  const handelOnClickCard = (countryName) => {
    dispatch(fetchCountryDetails(countryName));
  };

  const cardData = filterDataValue.length ? filterDataValue : originalData;
  if (loding) {
    <Loding />;
  }
  return (
    <div>
      <div>
        <div className="border border-green-900 mb-10 flex flex-col sm:flex-row justify-between gap-5 px-10 py-5">
          <div className="flex gap-4 items-center">
            <input
              type="text"
              className="outline-none border border-black rounded-xl py-2 px-4 font-bold"
              placeholder="Search By Country Name.."
              ref={searchElement}
              onChange={handelOnChangeCard}
            />
            {/* <button
              className="px-4 py-2 rounded-xl bg-green-500 text-white font-bold"
              onClick={handleOnClickSearch}
            >
              Search
            </button> */}
          </div>

          {/* Filter by reason */}
          <div>
            <select
              className="px-5 border border-black py-2 rounded-md outline-none font-medium "
              onChange={handelOnClickRegions}
            >
              <option hidden>Filter By Reason</option>
              <option value="Asia">Asia</option>
              <option value="Antarctica">Antarctica</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
              <option value="North America">North America</option>
              <option value="Africa">Africa</option>
              <option value="South America">South America</option>
            </select>
          </div>
        </div>

        {/* Display country cards */}

        <div className="flex flex-wrap gap-5 justify-evenly">
          {cardData.map((item) => (
            <Link to={`/cardDetail/${item.name.official}`} key={nanoid()}>
              <div
                className="w-[200px] bg-[#F0F0F0] rounded-xl"
                onClick={() => handelOnClickCard(item.name.official)}
              >
                <img
                  src={item.flags.svg}
                  alt="national flag"
                  className="h-[150px] w-full rounded-xl"
                />
                <h1 className="text-center text-xl italic px-3 font-semibold py-2">
                  {item.name.official}
                </h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
