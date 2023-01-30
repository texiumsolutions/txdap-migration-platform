import { useEffect, useState } from "react"

const UseInformation = () => {
    const [information, setInformation] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/run')
            .then(res => res.json())
            .then(data => setInformation(data))
    }, [information])
    return [information, setInformation];
}
export default UseInformation;