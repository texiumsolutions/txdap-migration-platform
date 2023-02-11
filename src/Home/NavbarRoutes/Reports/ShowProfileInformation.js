import React from 'react';
import { useParams } from 'react-router-dom';
import useProfiles from '../../../hooks/useProfiles';

const ShowProfileInformation = () => {
    const { profileId } = useParams();
    const [profile] = useProfiles(profileId);
    return (
        <div>
            <h1>{profile.name}</h1>
        </div>
    );
};

export default ShowProfileInformation;