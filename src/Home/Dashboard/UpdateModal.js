import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const UpdateModal = ({ id }) => {
    const [information, setInformation] = useState({});

    useEffect(() => {
        const url = `https://txdap-migration-platform-server-production.up.railway.app/all_information/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setInformation(data));
    }, [id]);

    const { register, handleSubmit, reset } = useForm();

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

    const onSubmit = (data, id) => {
        const url = `https://txdap-migration-platform-server-production.up.railway.app/all_information/${id}`;
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
            })
    };

    return (
        <div>
            <input type="checkbox" id="update-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="update-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-3xl">Booking for: {information.name}</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Number-01  */}

                        <label className="label justify-start">
                            <span className="label-text name-input ">Name:</span>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="ep-input p-1"
                                {...register("name")}
                                required
                            />
                        </label>
                        {/* Number-02  */}

                        <label className="label justify-start">
                            <span className="label-text name-input ">Type:</span>

                            <select
                                className=" ep-input p-1"
                                {...register("dropdown")}
                                required
                                value={selected}
                                onChange={handleChange}
                            >
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.text}
                                    </option>
                                ))}
                            </select>
                        </label>
                        {/* Number-03 */}

                        <label className="label justify-start">
                            <span className="label-text name-input">Description:</span>
                            <input
                                type="text"
                                placeholder="Type here"
                                className=" ep-input p-1"
                                {...register("description")}
                                required
                            />
                        </label>
                        <p className="text-2xl"> Parameters</p>
                        <div className="form-control ep">
                            {selectedFirstFive && (
                                <div>
                                    {/* Number-01  */}

                                    <label className="label justify-start">
                                        <span className="label-text name-input">Name:</span>
                                        <input
                                            type="text"
                                            placeholder="Type here"
                                            className="ep-input p-1"
                                            {...register("name")}
                                            required
                                        />
                                    </label>
                                    {/* Number-02  */}

                                    <label className="label justify-start">
                                        <span className="label-text name-input">Name:</span>
                                        <input
                                            type="text"
                                            placeholder="Type here"
                                            className="ep-input p-1"
                                            {...register("name")}
                                            required
                                        />
                                    </label>
                                    {/* Number-03 */}

                                    <label className="label justify-start">
                                        <span className="label-text name-input">Input 01:</span>
                                        <input
                                            type="text"
                                            placeholder="Type here"
                                            className="ep-input p-1"
                                            {...register("input1")}
                                            required
                                        />
                                    </label>
                                    {/* Number-04  */}

                                    <label className="label justify-start">
                                        <span className="label-text name-input">Input 02:</span>
                                        <input
                                            type="text"
                                            placeholder="Type here"
                                            className="ep-input p-1"
                                            {...register("input2")}
                                            required
                                        />
                                    </label>
                                    {/* Number-05  */}

                                    <label className="label justify-start">
                                        <span className="label-text name-input">Input 03:</span>
                                        <input
                                            type="text"
                                            placeholder="Type here"
                                            className="ep-input p-1"
                                            {...register("input3")}
                                            required
                                        />
                                    </label>
                                </div>
                            )}

                            {selectedSecondFive && (
                                <div>
                                    {/* Number-06  */}

                                    <label className="label justify-start">
                                        <span className="label-text name-input">Input 04:</span>
                                        <input
                                            type="text"
                                            placeholder="Type here"
                                            className="ep-input p-1"
                                            {...register("input4")}
                                            required
                                        />
                                    </label>
                                    {/* Number-07  */}

                                    <label className="label justify-start">
                                        <span className="label-text name-input">Input 05:</span>
                                        <input
                                            type="text"
                                            placeholder="Type here"
                                            className="ep-input p-1"
                                            {...register("input5")}
                                            required
                                        />
                                    </label>
                                    {/* Number-08  */}

                                    <label className="label justify-start">
                                        <span className="label-text name-input">Input 06:</span>
                                        <input
                                            type="text"
                                            placeholder="Type here"
                                            className="ep-input p-1"
                                            {...register("input6")}
                                            required
                                        />
                                    </label>
                                    {/* Number-09  */}

                                    <label className="label justify-start">
                                        <span className="label-text name-input">Input 07:</span>
                                        <input
                                            type="text"
                                            placeholder="Type here"
                                            className="ep-input p-1"
                                            {...register("input7")}
                                            required
                                        />
                                    </label>
                                    {/* Number-10  */}

                                    <label className="label justify-start">
                                        <span className="label-text name-input">Input 08:</span>
                                        <input
                                            type="text"
                                            placeholder="Type here"
                                            className="ep-input p-1"
                                            {...register("input8")}
                                            required
                                        />
                                    </label>
                                </div>
                            )}

                            {selectedThirdFive && (
                                <div>
                                    {/* Number-11  */}

                                    <label className="label justify-start">
                                        <span className="label-text name-input">Input 09:</span>
                                        <input
                                            type="text"
                                            placeholder="Type here"
                                            className="ep-input p-1"
                                            {...register("input9")}
                                            required
                                        />
                                    </label>
                                    {/* Number-12  */}

                                    <label className="label justify-start">
                                        <span className="label-text name-input">Input 10:</span>
                                        <input
                                            type="text"
                                            placeholder="Type here"
                                            className="ep-input p-1"
                                            {...register("input10")}
                                            required
                                        />
                                    </label>
                                    {/* Number-13  */}

                                    <label className="label justify-start">
                                        <span className="label-text name-input">Input 11:</span>
                                        <input
                                            type="text"
                                            placeholder="Type here"
                                            className="ep-input p-1"
                                            {...register("input11")}
                                            required
                                        />
                                    </label>
                                    {/* Number-14  */}

                                    <label className="label justify-start">
                                        <span className="label-text name-input">Input 12:</span>
                                        <input
                                            type="text"
                                            placeholder="Type here"
                                            className="ep-input p-1"
                                            {...register("input12")}
                                            required
                                        />
                                    </label>
                                    {/* Number-15  */}

                                    <label className="label justify-start">
                                        <span className="label-text name-input">Input 13:</span>
                                        <input
                                            type="text"
                                            placeholder="Type here"
                                            className="ep-input p-1"
                                            {...register("input13")}
                                            required
                                        />
                                    </label>
                                </div>
                            )}

                            <input
                                className="ebtn btn bg-blue-700 text-white mt-5"
                                type="submit"
                                value="Save"
                            />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateModal;