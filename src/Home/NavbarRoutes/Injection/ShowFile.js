import React from 'react';
import useFile from '../../../hooks/useFile';
import Files from './Files';

const ShowFile = () => {
    const [files] = useFile()
    return (
        <div>
            <h1 className='pl-20 pt-10 text-2xl font-semibold'>Uploaded File Here</h1>
            <div className='grid grid-cols-1 gap-4 pl-20 pt-6'>
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