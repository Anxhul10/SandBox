import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { FormCollection } from "../api/FormCollection";


//
// export const FormList = () => {
//     const {data, isLoading} = useTracker(()=>{
//         const handle = Meteor.subscribe('formData');
//         return {
//             isLoading:!handle.ready(),
//             data:FormCollection.find().fetch()
//         }
//
//     })
//     if(!isLoading){
//         console.log(data);
//     }
//     return <>
//         {data.map((item, index) => {
//             return <>
//                 <br></br>
//                 <div >
//                     Name:{item.name}
//                 </div>
//                 <div>
//                     email:{item.email}
//                 </div>
//
//             </>
//         })}
//     </>
//
// };

export const FormList = ()=> {
    const {data,isLoading}= useTracker(()=>{
        const handle = Meteor.subscribe('formData');
        return {
            isLoading:!handle.ready(),
            data:FormCollection.find().fetch()
        }
    })
    return (
        <ul role="list" className="divide-y divide-gray-100">
            {data.map((item) => (
                <li key={item.email} className="flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
                        <img alt="" src={item.ImgUrl} className="size-12 flex-none rounded-full bg-gray-50" />
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm/6 font-semibold text-gray-900">{item.name}</p>
                            <p className="mt-1 truncate text-xs/5 text-gray-500">{item.email}</p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}

