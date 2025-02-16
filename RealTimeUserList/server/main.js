import { Meteor } from 'meteor/meteor';
// import { LinksCollection } from '/imports/api/links';
import {FormCollection} from "../imports/api/FormCollection";

Meteor.startup(async () => {
  console.log("starting meteor");

  Meteor.publish('formData',function(){
    return FormCollection.find();
  });

});


// We publish the entire Links collection to all clients.
// In order to be fetched in real-time to the clients
//   Meteor.publish("links", function () {
//     return LinksCollection.find();
//   });
// });
