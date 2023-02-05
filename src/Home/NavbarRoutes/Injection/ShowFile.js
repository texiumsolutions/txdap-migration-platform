import React from 'react';
import useFile from '../../../hooks/useFile';
import Files from './Files';

const ShowFile = () => {
    const [files] = useFile()
    return (
        <div>
            <h1 className='pl-28 pt-4 text-2xl font-semibold'>Uploaded File Here....</h1>
            <div className='grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1  gap-4 pl-28 pt-10'>
                {
                    files.map(file => <Files
                        key={file._id}
                        file={file}
                    ></Files>)
                }
            </div>
        </div>
    );
};

export default ShowFile;