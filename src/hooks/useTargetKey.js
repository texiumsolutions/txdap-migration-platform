import { useEffect, useState } from "react"

const useTargetKey = () => {
    const [targetKey, setTargetKey] = useState([]);
    useEffect(() => {
        fetch('https://txdap-migration-platform-server-production.up.railway.app/target-key')
            .then(res => res.json())
            .then(data => setTargetKey(data))
    }, [targetKey])
    return [targetKey, setTargetKey];
}
export default useTargetKey;