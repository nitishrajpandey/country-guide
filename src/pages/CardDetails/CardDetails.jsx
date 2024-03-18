import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountryDetails } from "../../store/countryDetailsSlice";
import { Link, useParams } from "react-router-dom";
import Loding from "../../components/Loder/Loding";

function CardDetails() {
  const dispatch = useDispatch();
  const { country } = useParams();
  const data = useSelector(
    (state) => state.countryDetails.countryDetailsData[0]
  );
  const loding = useSelector((state) => state.countryDetails.lodingSatus);

  useEffect(() => {
    dispatch(fetchCountryDetails(country));
  }, []);

  if (loding) <Loding />;

  return (
    <div className="py-20 bg-[#F0F0F0] ">
      <div className="max-w-[900px] p-5 mx-5 sm:mx-auto shadow-xl rounded-2xl bg-slate-100">
        <Link to={"/"}>
          <button className="px-4 py-2 mb-4 bg-red-400 text-white rounded-xl active:scale-95 duration-300 ease-in-out">
            back
          </button>
        </Link>
        <div className=" rounded-xl w-fit mx-auto">
          <img src={data?.flags?.png} className="w-full rounded-xl" alt="" />
          <h1 className="px-3 py-3 text-center text-xl capitalize font-semibold">
            {data?.name?.official}
          </h1>
        </div>
        <div className="flex flex-col gap-4 py-10">
          <h1 className="capitalize text-xl">
            {" "}
            <span className="font-semibold">Official Name : </span>{" "}
            {data?.name?.official}
          </h1>
          <h1 className="capitalize text-xl">
            <span className="font-semibold">other Name : </span>
            {data?.altSpellings?.map((item) => `${item}`).join(" ,  ")}
          </h1>
          <h1 className="font-semibold text-xl">
            Borders : {data?.borders?.map((item) => `${item}`).join(" ,  ")}
          </h1>
          <div className=" columns-1 sm:columns-2 mx-auto sm:mx-0">
            <ul className="flex flex-col gap-3">
              <li>continents : {data?.continents}</li>
              <li>Area : {data?.area}</li>
              <li>population : {data?.population}</li>
              <li>Capital : {data?.capital} </li>
              <li>latitude : {data?.capitalInfo?.latlng[0]}</li>
              <li>longutitude : {data?.capitalInfo?.latlng[1]}</li>
              <li>car drive side : {data?.car?.side}</li>
              <li>subregion : {data?.subregion}</li>
            </ul>
          </div>
          <div className="mx-auto py-10">
            <img src={data?.coatOfArms?.svg} alt="" className="w-[200px]" />
          </div>

          <h2 className="mx-auto font-semibold text-xl">
            {" "}
            google Map :{" "}
            <a href={data?.maps?.googleMaps} target="_blank">
              {" "}
              <button className="px-4 py-2 bg-green-600 text-white rounded-xl active:scale-95 duration-300 ease-in-out">
                click me
              </button>
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
