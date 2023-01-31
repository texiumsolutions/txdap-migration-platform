import React, { useRef, useState } from 'react';
import Injection from './Injection';
import filePic from '../../../images/file.jpg';
import PropTypes from 'prop-types';
import { ImageConfig } from '../../../config/ImageConfig';
import { useForm } from 'react-hook-form';

const UploadFile = props => {

    const { handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/upload`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                reset();
            })
    };

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
        <div className='card w-[1400px] h-[600px] mt-12 ml-16 bg-base-100 shadow-xl drop-shadow-2xl'>
            <Injection></Injection>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex gap-10 pt-16 pl-8'>
                    <>
                        <div
                            ref={wrapperRef}
                            className='drop-file-input'
                            onDragEnter={onDragEnter}
                            onDragLeave={onDragLeave}
                            onDrop={onDrop}
                        >
                            <div className='cursor-pointer drop-file-input_label'>
                                <img className='' src={filePic} alt="" />
                                <p className='text-black'>Drag and Drop your files here</p>
                            </div>
                            <input type="file" value="" onChange={onFileDrop} />
                        </div>
                        {
                            fileList.length > 0 ? (
                                <div className='drop-file-preview'>
                                    <p className='drop-file-preview_title'>
                                        Uploaded File here
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
                </div>
                <div className='pt-12 pr-[950px]'>
                    <input type="submit" value='Create Now' className='text-md text-black px-10 py-2 border border-black rounded-md cursor-pointer' />
                </div>
            </form>

        </div>
    );
};

UploadFile.propTypes = {
    onFileChange: PropTypes.func
}

export default UploadFile;