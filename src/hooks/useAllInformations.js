import { useEffect, useState } from "react"

const useInformation = () => {
    const [allInformation, setAllInformation] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/all_information')
            .then(res => res.json())
            .then(data => setAllInformation(data))
    }, [allInformation])
    return [allInformation, setAllInformation];
}
export default useInformation;