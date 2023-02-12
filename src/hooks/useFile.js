import { useEffect, useState } from "react"

const useFile = () => {
    const [files, setFiles] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:5000/upload';

        fetch(url)
            .then(res => res.json())
            .then(data => setFiles(data))
    }, [files])
    return [files, setFiles];
}
export default useFile;