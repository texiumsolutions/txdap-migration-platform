import { useEffect, useState } from "react"

const useFile = () => {
    const [files, setFiles] = useState([]);
    useEffect(() => {
        const url = 'https://txdap-migration-platform-server-production.up.railway.app/upload';

        fetch(url)
            .then(res => res.json())
            .then(data => setFiles(data))
    }, [files])
    return [files, setFiles];
}
export default useFile;