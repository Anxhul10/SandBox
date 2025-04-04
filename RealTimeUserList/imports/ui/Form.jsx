import React from 'react'
import {useState, useEffect} from 'react'
import {FormCollection} from '../api/FormCollection'
// want to show the changes to the client
export const Form = ()=>{
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[ImgUrl, setImgUrl] = useState('');
    const saveContact = (e)=>{
        e.preventDefault();
        console.log({name,email,ImgUrl});
        FormCollection.insert({name,email,ImgUrl});
        setName('')
        setEmail('')
        setImgUrl('')
    }
    const cancelContact = (e)=>{
        setName('')
        setEmail('')
        setImgUrl('')
    }
    return <>

        <form>
            <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base/7 font-semibold text-gray-900">Personal Information</h2>
                <p className="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p>

                <div className="mt-14 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-8">
                    <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                            Name
                        </label>
                        <div className="mt-2">
                            <input
                                id="first-name"
                                name="first-name"
                                type="text"
                                value={name}
                                autoComplete="given-name"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                onChange={(e)=>{
                                    setName(e.target.value)
                                }}
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-4">
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={email}
                                autoComplete="email"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                onChange={(e)=>{
                                    setEmail(e.target.value);
                                }}
                            />
                        </div>
                    </div>

                </div>
                <div className="sm:col-span-4">
                    <label htmlFor="email" className="block text-sm/ font-medium text-gray-900">
                        Image Url
                    </label>
                    <div className="mt-2">
                        <input
                            id="ImgUrl"
                            name="ImgUrl"
                            type="ImgUrl"
                            value={ImgUrl}
                            autoComplete="ImgUrl"
                            className="block max-w-10xl rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            onChange={(e)=>{
                                setImgUrl(e.target.value);
                            }}
                        />
                    </div>
                </div>
            </div>


            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm/6 font-semibold text-gray-900" onClick={cancelContact}>
                    Cancel
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={saveContact}
                >
                    Save
                </button>
            </div>
        </form>

    </>
};
