import { Meteor } from 'meteor/meteor';
import {TodoCollection} from "/imports/api/TodoCollection";


Meteor.startup(async () => {
    Meteor.publish('todo',function(){
        return TodoCollection.find();
    });
    // Meteor.methods({
    //     'todo.insert'(title: string) {
    //         TodoCollection.insert({ title });
    //     }
    // });
});
