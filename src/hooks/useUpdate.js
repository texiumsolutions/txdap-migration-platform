import { useEffect, useState } from "react";

const useUpdate = infoId => {
    const [informations, setInformations] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/all_information/${infoId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setInformations(data));
    }, [infoId]);
    return [informations, setInformations];
}
export default useUpdate;