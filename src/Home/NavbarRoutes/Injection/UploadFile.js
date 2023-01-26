import React, { useRef, useState } from 'react';
import Injection from './Injection';
import filePic from '../../../images/file.jpg';
import './UploadFile.css';
import PropTypes from 'prop-types';
import { ImageConfig } from '../../../config/ImageConfig';

const UploadFile = props => {
    const wrapperRef = useRef(null);

    const [fileList, setFileList] = useState([]);

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');
    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');
    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
            props.onFileChange(updatedList);
        }

    }

    const fileRemove = (file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        props.onFileChange(updatedList);
    }


    return (
        <div className=''>
            <Injection></Injection>
            <div className='flex gap-10 pt-16 pl-64'>
                <>
                    <div
                        ref={wrapperRef}
                        className='drop-file-input'
                        onDragEnter={onDragEnter}
                        onDragLeave={onDragLeave}
                        onDrop={onDrop}
                    >
                        <div className='cursor-pointer drop-file-input_label'>
                            <img src={filePic} alt="" />
                            <p>Drag and Drop your files here</p>
                        </div>
                        <input type="file" value="" onChange={onFileDrop} />
                    </div>
                    {
                        fileList.length > 0 ? (
                            <div className='drop-file-preview'>
                                <p className='drop-file-preview_title'>
                                    Ready to upload
                                </p>
                                {
                                    fileList.map((item, index) => (
                                        <div
                                            key={index}
                                            className='drop-file-preview_item'> <br />
                                            <img
                                                className='w-20'

                                                src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']}
                                                alt="" />
                                            <div className='drop-file-preview_info'>
                                                <p>{item.name}</p>
                                                <p>{item.size}</p>
                                            </div>
                                            <span className='drop-file-preview_item_del'
                                                onClick={() => fileRemove(item)}
                                            >X</span>
                                        </div>
                                    ))
                                }
                            </div>
                        ) : null
                    }
                </>
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

UploadFile.propTypes = {
    onFileChange: PropTypes.func
}

export default UploadFile;