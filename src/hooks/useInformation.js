import { useEffect, useState } from "react"

const useInformation = () => {
    const [information, setInformation] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/information')
            .then(res => res.json())
            .then(data => setInformation(data))
    }, [information])
    return [information, setInformation];
}
export default useInformation;