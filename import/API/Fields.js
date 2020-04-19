import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor'

export const Fields = new Mongo.Collection('fields');

if (Meteor.isServer) {
    Meteor.publish('fields', function fieldsPublication() {
        return Fields.find()
    });
}