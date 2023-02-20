import { useEffect, useState } from "react"

const useTargetKey = () => {
    const [targetKey, setTargetKey] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/target-key')
            .then(res => res.json())
            .then(data => setTargetKey(data))
    }, [targetKey])
    return [targetKey, setTargetKey];
}
export default useTargetKey;