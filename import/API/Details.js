import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor'

export const Details = new Mongo.Collection('details');

if (Meteor.isServer) {
    Meteor.publish('details', function detailsPublication() {
        return Details.find();
    });
}