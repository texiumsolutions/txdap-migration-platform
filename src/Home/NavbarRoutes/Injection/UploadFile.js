

import { ImageConfig } from '../../../config/ImageConfig';
import './UploadFile.css'

const UploadFile = props => {



    return (
        <div>
            <div className=''>
                <div className='flex gap-10 pt-16 pl-8'>
                    <>
                        <div className='drop-file-preview'>
                            <p className='drop-file-preview_title'>
                                Uploaded File here
                            </p>
                            <div

                                className='drop-file-preview_item'> <br />
                                <img
                                    className='w-20'

                                    src={ImageConfig['default']}
                                    alt="" />
                                <div className='drop-file-preview_info'>

                                </div>
                                <span className='drop-file-preview_item_del'
                                >X</span>
                            </div>


                        </div>

                    </>
                </div>

            </div>
        </div>
    );
};

export default UploadFile;