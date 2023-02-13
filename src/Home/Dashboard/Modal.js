import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

const Modal = ({ id }) => {
    // console.log(id);
    const [information, setInformation] = useState({});
    // console.log(information)

    useEffect(() => {
        const url = `http://localhost:5000/all_information/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setInformation(data));
    }, [id]);

    const { register, handleSubmit } = useForm();

    const options = [
        { value: "", text: "--Choose an option--" },
        { value: "File System", text: "File System" },
        { value: "Mongo DB", text: "Mongo DB" },
        { value: "MySQL Server", text: "MySQL Server" },
    ];

    const [selectedFirstFive, setSelectedFirstFive] = useState(true);
    const [selectedSecondFive, setSelectedSecondFive] = useState(false);
    const [selectedThirdFive, setSelectedThirdFive] = useState(false);

    const [selected, setSelected] = useState(options[0].value);
    const handleChange = (event) => {
        let value = event.target.value;

        if (value === "") {
            setSelectedFirstFive(false);
            setSelectedSecondFive(false);
            setSelectedThirdFive(false);
        } else if (value === "File System") {
            setSelectedFirstFive(true);
            setSelectedSecondFive(false);
            setSelectedThirdFive(false);
        } else if (value === "Mongo DB") {
            setSelectedFirstFive(false);
            setSelectedSecondFive(true);
            setSelectedThirdFive(false);
        } else if (value === "MySQL Server") {
            setSelectedFirstFive(false);
            setSelectedSecondFive(false);
            setSelectedThirdFive(true);
        }
        setSelected(value);
    };


    const onSubmit = (data) => {
        const url = `http://localhost:5000/all_information/${id}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast('Successfully Update Your Data');
            })
    };
    return (
        <div>
            <input type="checkbox" id="update-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="update-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-3xl">Update for: {information.name}</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <label className="label justify-start">
                            <span className="label-text name-input ">Name:</span>
                            <input
                                type="text"
                                className="ep-input p-1"
                                {...register("name")}
                                defaultValue={information.name}
                                disabled
                            />
                        </label>

                        <label className="label justify-start">
                            <span className="label-text name-input ">Type:</span>

                            <input
                                className=" ep-input p-1"
                                value={information.dropdown}
                                disabled
                            >
                            </input>
                        </label>

                        <label className="label justify-start">
                            <span className="label-text name-input">Description:</span>
                            <input
                                type="text"
                                className=" ep-input p-1"
                                {...register("description")}
                                defaultValue={information.description}
                            />
                        </label>
                        <p className="text-2xl"> Parameters</p>
                        <div className="form-control ep">
                            <div>


                                <label className="label justify-start">
                                    <span className="label-text name-input">Input 01:</span>
                                    <input
                                        type="text"
                                        className="ep-input p-1"
                                        {...register("input1")}
                                        defaultValue={information.input1}
                                    />
                                </label>


                                <label className="label justify-start">
                                    <span className="label-text name-input">Input 02:</span>
                                    <input
                                        type="text"
                                        defaultValue={information.input2}
                                        className="ep-input p-1"
                                        {...register("input2")}

                                    />
                                </label>

                                <label className="label justify-start">
                                    <span className="label-text name-input">Input 03:</span>
                                    <input
                                        type="text"
                                        defaultValue={information.input3}
                                        className="ep-input p-1"
                                        {...register("input3")}

                                    />
                                </label>
                            </div>

                            <div>

                                <label className="label justify-start">
                                    <span className="label-text name-input">Input 04:</span>
                                    <input
                                        type="text"
                                        defaultValue={information.input4}
                                        className="ep-input p-1"
                                        {...register("input4")}

                                    />
                                </label>

                                <label className="label justify-start">
                                    <span className="label-text name-input">Input 05:</span>
                                    <input
                                        type="text"
                                        defaultValue={information.input5}
                                        className="ep-input p-1"
                                        {...register("input5")}

                                    />
                                </label>

                                <label className="label justify-start">
                                    <span className="label-text name-input">Input 06:</span>
                                    <input
                                        type="text"
                                        defaultValue={information.input6}
                                        className="ep-input p-1"
                                        {...register("input6")}

                                    />
                                </label>
                            </div>

                            <div>

                                <label className="label justify-start">
                                    <span className="label-text name-input">Input 07:</span>
                                    <input
                                        type="text"
                                        defaultValue={information.input7}
                                        className="ep-input p-1"
                                        {...register("input7")}

                                    />
                                </label>

                                <label className="label justify-start">
                                    <span className="label-text name-input">Input 08:</span>
                                    <input
                                        type="text"
                                        defaultValue={information.input8}
                                        className="ep-input p-1"
                                        {...register("input8")}

                                    />
                                </label>

                                <label className="label justify-start">
                                    <span className="label-text name-input">Input 09:</span>
                                    <input
                                        type="text"
                                        defaultValue={information.input9}
                                        className="ep-input p-1"
                                        {...register("input9")}

                                    />
                                </label>
                            </div>

                            <input
                                className="ebtn btn bg-blue-700 text-white mt-5"
                                type="submit"
                                value="Update"
                            />
                        </div>

                    </form>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Modal;