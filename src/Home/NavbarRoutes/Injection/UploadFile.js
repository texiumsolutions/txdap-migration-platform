import React from 'react';
import Injection from './Injection';

const UploadFile = () => {
    return (
        <div className=''>
            <Injection></Injection>
            <div className='flex gap-10 pt-16 pl-64'>
                <div className="w-96">
                    <label for="dropzone-file" className="flex flex-col justify-center items-center w-full h-80 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer ">
                        <div className="flex flex-col justify-center items-center pt-5 pb-6">
                            <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>

                        </div>
                        <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                </div>
                <div className=''>
                    <div className=''>Uploading...</div>
                </div>
            </div>
            <div className='pt-12 pr-[650px]'>
                <input type="submit" value='Create Now' className='text-md text-black px-10 py-2 border border-black rounded-md cursor-pointer' />
            </div>
        </div>
    );
};

export default UploadFile;