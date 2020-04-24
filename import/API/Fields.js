import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor'

export const Fields = new Mongo.Collection('fields');

if (Meteor.isServer) {
    Meteor.publish('fields', function fieldsPublication(category) {
        return Fields.find({category: category})
    });

    Meteor.publish('categories', function () {
        return Fields.find({}, { items: 0 })
    });
}