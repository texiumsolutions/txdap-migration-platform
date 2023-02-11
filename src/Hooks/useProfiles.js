import { useEffect, useState } from "react"

const useProfiles = profileId => {
    const [profile, setProfile] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/run/${profileId}`;
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer`
            },
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }, [profileId]);
    return [profile, setProfile];
}
export default useProfiles;