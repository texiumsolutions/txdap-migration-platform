import React, { CSSProperties, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
    useCSVReader,
    lightenDarkenColor,
    formatFileSize,
} from 'react-papaparse';
import Home from '../Home';
import Injection from '../NavbarRoutes/Injection/Injection';

const GREY = '#CCC';
const GREY_LIGHT = 'rgba(255, 255, 255, 0.4)';
const DEFAULT_REMOVE_HOVER_COLOR = '#A01919';
const REMOVE_HOVER_COLOR_LIGHT = lightenDarkenColor(
    DEFAULT_REMOVE_HOVER_COLOR,
    40
);
const GREY_DIM = '#686868';

const styles = {
    zone: {
        alignItems: 'center',
        border: `2px dashed ${GREY}`,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'column',
        height: '300px',
        width: "400px",
        justifyContent: 'center',
        marginLeft: '40px',
        marginTop: '30px',
        cursor: 'pointer'
    } as CSSProperties,
    file: {
        background: 'linear-gradient(to bottom, #EEE, #DDD)',
        borderRadius: 20,
        display: 'flex',
        height: 120,
        width: 120,
        position: 'relative',
        zIndex: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: '700px'
    } as CSSProperties,
    info: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 10,
        paddingRight: 10,
    } as CSSProperties,
    size: {
        backgroundColor: GREY_LIGHT,
        borderRadius: 3,
        marginBottom: '0.5em',
        justifyContent: 'center',
        display: 'flex',
    } as CSSProperties,
    name: {
        backgroundColor: GREY_LIGHT,
        borderRadius: 3,
        fontSize: 12,
        marginBottom: '0.5em',
    } as CSSProperties,
    progressBar: {
        bottom: 14,
        position: 'absolute',
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
    } as CSSProperties,
    zoneHover: {
        borderColor: GREY_DIM,
    } as CSSProperties,
    default: {
        borderColor: GREY,
    } as CSSProperties,
    remove: {
        height: 23,
        position: 'absolute',
        right: 6,
        top: 6,
        width: 23,
    } as CSSProperties,
};


const Upload = () => {


    const { handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
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
    const { CSVReader } = useCSVReader();
    const [zoneHover, setZoneHover] = useState(false);
    const [removeHoverColor, setRemoveHoverColor] = useState(
        DEFAULT_REMOVE_HOVER_COLOR
    );
    return (
        <div>
            <Home></Home>
            <Injection></Injection>
            <CSVReader
                onUploadAccepted={(results: any) => {
                    console.log('---------------------------');
                    console.log(results);
                    console.log('---------------------------');
                    setZoneHover(false);
                }}
                onDragOver={(event: DragEvent) => {
                    event.preventDefault();
                    setZoneHover(true);
                }}
                onDragLeave={(event: DragEvent) => {
                    event.preventDefault();
                    setZoneHover(false);
                }}
            >
                {({
                    getRootProps,
                    acceptedFile,
                    ProgressBar,
                    getRemoveFileProps,
                    Remove,
                }: any) => (
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div
                            {...getRootProps()}
                            style={Object.assign(
                                {},
                                styles.zone,
                                zoneHover && styles.zoneHover
                            )}
                        >
                            {acceptedFile ? (

                                <>
                                    <div className='flex justify-center items-center'>
                                        <p>Drop or upload Excel file</p>
                                    </div>
                                    <div style={styles.file}>
                                        <div style={styles.info}>
                                            <span style={styles.size}>
                                                {formatFileSize(acceptedFile.size)}
                                            </span>
                                            <span style={styles.name}>{acceptedFile.name}</span>
                                        </div>
                                        <div style={styles.progressBar}>
                                            <ProgressBar />
                                        </div>
                                        <div
                                            {...getRemoveFileProps()}
                                            style={styles.remove}
                                            onMouseOver={(event: Event) => {
                                                event.preventDefault();
                                                setRemoveHoverColor(REMOVE_HOVER_COLOR_LIGHT);
                                            }}
                                            onMouseOut={(event: Event) => {
                                                event.preventDefault();
                                                setRemoveHoverColor(DEFAULT_REMOVE_HOVER_COLOR);
                                            }}
                                        >
                                            <Remove color={removeHoverColor} />
                                        </div>
                                    </div>
                                </>
                            ) : (
                                // 'Drop CSV file here or click to upload'
                                'Drop or upload Excel file'
                            )}
                        </div>
                        <input className='cursor-pointer' type="submit" />
                    </form>
                )}
            </CSVReader>
        </div>
    );
};

export default Upload;