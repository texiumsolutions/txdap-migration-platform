import { useEffect, useState } from "react";
const useUpdate = infoId => {
    const [informations, setInformations] = useState({});

    useEffect(() => {
        const url = `https://txdap-migration-platform-server-production.up.railway.app/all_information/${infoId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setInformations(data));
    }, [infoId]);
    return [informations, setInformations];
}
export default useUpdate;