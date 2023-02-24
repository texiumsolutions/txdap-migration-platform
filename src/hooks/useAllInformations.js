import { useEffect, useState } from "react"

const useInformation = () => {
    const [allInformation, setAllInformation] = useState([]);
    useEffect(() => {
        fetch('https://txdap-migration-platform-server-production.up.railway.app/all_information')
            .then(res => res.json())
            .then(data => setAllInformation(data))
    }, [allInformation])
    return [allInformation, setAllInformation];
}
export default useInformation;