import { useEffect, useState } from "react"

const useInformation = () => {
    const [information, setInformation] = useState([]);
    useEffect(() => {
        fetch('https://txdap-migration-platform-server-production.up.railway.app/run')
            .then(res => res.json())
            .then(data => setInformation(data))
    }, [information])
    return [information, setInformation];
}
export default useInformation;