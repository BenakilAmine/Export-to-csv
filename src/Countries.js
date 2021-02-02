import React, {useState, useRef, useEffect} from "react";
import { useLazyQuery } from "@apollo/client";
import { CSVLink } from "react-csv";
import { GrDocumentCsv } from "react-icons/gr";
import {
    GET_COUNTRIES
  } from "./queries/pays";


export function DelayedCountries() {

  const [countries, setCountries] = useState([])
  const [getCountries, { loading, data }] = useLazyQuery(GET_COUNTRIES);
  const csvRef = useRef(null);

  useEffect(() => {
      function downloadCsv() {
        getCountries(csvRef.current.data, `filename.csv`);
      }
      downloadCsv();
    }, [data, countries]);


  if (loading) return <p>Loading ...</p>;
  if (data && data.countries > 0) {
    setCountries(data)
  
  }

  return (
    <div>
      <button
      style={{listStyle: "none"}}
      onClick={(e) => e.stopPropagation()}>
        {/* {data && data.countries && */}
        <CSVLink 
          ref={csvRef}
          data={data?.countries ? data.countries : []} 
          //   asyncOnClick={true}
            // onClick={(event, done) => {
            //   getCountries()
            //   setTimeout(() => {
            //     done(); // Don't Proceed
            //   }, 2000);
            // }}
          >
            <GrDocumentCsv size={"22px"} style={{ fill: "#37374b" }} />
          Export to CSV
        </CSVLink>
        {/* } */}
      </button>
      
      
    </div>
  );
}
