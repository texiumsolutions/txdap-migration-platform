import { useEffect, useState } from "react"

const useInformation = () =>{
     const [informations, setInformations] = useState([]);

     useEffect(() =>{
      fetch ('http://localhost:5000/information')
      .then((res) => res.json())
      .then((data) => setInformations(data));
     }, [informations]);
     return [informations, setInformations];
}

export default useInformation;
