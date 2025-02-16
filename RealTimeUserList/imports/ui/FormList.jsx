import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { FormCollection } from "../api/FormCollection";

export const FormList = () => {
    const {data, isLoading} = useTracker(()=>{
        const handle = Meteor.subscribe('formData');
        return {
            isLoading:!handle.ready(),
            data:FormCollection.find().fetch()
        }

    })
    if(!isLoading){
        console.log(data);
    }
    return <>
        {data.map((item, index) => {
            return <>
                <br></br>
                <div >
                    Name:{item.name}
                </div>
                <div>
                    email:{item.email}
                </div>

            </>
        })}
    </>

};
