import React, {useState, useRef, useEffect} from "react";
import { useLazyQuery } from "@apollo/client";
import { CSVLink , CSVDownload} from "react-csv";
import { GrDocumentCsv } from "react-icons/gr";
import {
    GET_COUNTRIES
  } from "./queries/pays";
  import {Country} from "./generated/graphql";

export function DelayedCountries() {

  const [countries, setCountries] = useState([])
  const [getCountries, { loading, data }] = useLazyQuery(GET_COUNTRIES);
  const csvRef = useRef(null);

  // useEffect(() => {
  //   fetch(getCountries()).then(res => setCountries(res.data))
  //     // function downloadCsv() {
  //     //   getCountries();
  //     // }
  //     // downloadCsv();
  //   }, []);


  if (loading) return <p>Loading ...</p>;
  if (data && data.countries > 0) {
    setCountries(data)
  
  }
 
  const CSVButton =() => {
    if (!data?.countries.lenght) {
      console.log('mes data', data)
      return (
        <div>
          <button onClick={getCountries}>
          
          {
          data?.countries &&
        <CSVDownload
              target="_self"
              data={data.countries}
              >Download</CSVDownload>
        }
        Export
          </button>
        </div>
        )
    }
  }
  
  return (
    
      <div>
        <CSVButton/>
      </div>
  
  );
}
