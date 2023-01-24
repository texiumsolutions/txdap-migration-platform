import React from 'react';
import Extraction from './Extraction';

const Search = () => {
    return (
        <div>
            <Extraction></Extraction>
            <div className=" bg-base-600">
                <div class="form-control w-full max-w-xs p-10">
                    <label class="label">
                        <span class="label-text text-blue-600 text-xl">KEYWORDS</span>
                    </label>
                    <input
                        type="text"
                        placeholder=""
                        class="input input-bordered w-full "
                    />
                    <label class="label">
                        <span class="label-text text-blue-600 text-xl">SKILLS</span>
                    </label>
                    <input
                        type="text"
                        placeholder=""
                        class="input input-bordered w-full "
                    />
                </div>
            </div>
        </div>
    );
};

export default Search;