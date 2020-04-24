import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor'

export const Fields = new Mongo.Collection('fields');

if (Meteor.isServer) {
    Meteor.publish('fields', function fieldsPublication() {
        return Fields.find()
    });

    Meteor.publish('categories', function () {
        return Fields.find({}, { items: 0 })
    });

    if ( Fields.find().count() == 0) {
        Fields.insert({
            category: 'smartPhone',
            en: "smartphone",
            zh: "手机比较",
            items: [
                {
                    name: "startTime",
                    en: "release time",
                    zh: "发布时间",
                }, {
                    name: "madeIn",
                    en: "made in",
                    zh: "产地",
                }, {
                    name: "CPU",
                    en: "CPU"
                }, {
                    name: "mainHz",
                    parent: "CPU",
                    zh: "主频"
                }, {
                    name: "AnTuTuscot",
                    parent: "CPU",
                    zh: "安兔兔跑分",
                }
            ]
        })
    }
}