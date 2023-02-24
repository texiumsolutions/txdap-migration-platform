import { useEffect, useState } from "react"

const useTargetKey = () => {
    const [targetKey, setTargetKey] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/profile')
            .then(res => res.json())
            .then(data => setTargetKey(data))
    }, [targetKey])
    return [targetKey, setTargetKey];
}
export default useTargetKey;