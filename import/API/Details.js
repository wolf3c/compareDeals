import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor'

export const Details = new Mongo.Collection('details');

if (Meteor.isServer) {
    Meteor.publish('details', function detailsPublication(category) {
        return Details.find({category: category})
    });

    Meteor.publish('detailsNames', function(category) {
        return Details.find({category: category}, {
            name: 1,
            en: 1,
            zh: 1,
        })
    });
}