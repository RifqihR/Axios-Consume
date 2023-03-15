import React, { useEffect, useState } from "react";
import axios from "axios";

export default function TextAxios() {
  const [Data, setData] = useState("");
  const getdatapokemon = () => {
  
    var config = {
      method: "get",
      url: "https://pokeapi.co/api/v2/ability/",
      headers: {},
    };
    
    axios(config)
      .then( (value)=> {
       setData(value.data);
      })
  };

 

  const Renderdata=()=>{
    return Data?.results?.map((value,index)=>{
        return <div key={index}>
            <p>Nama: {value.name}</p>
            <p>Url: {value.url}</p>
            <button onClick={()=>{
                getAbilityDetail()
            }}></button>
            <hr></hr>
        </div>
    })
  }

  const getAbilityDetail=()=>{
    
  }

  useEffect(() => {
    getdatapokemon()
  }, []);

  return <div>
    {Renderdata()}
  </div>;
}
