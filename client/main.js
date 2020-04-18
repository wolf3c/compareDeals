import { Meteor } from "meteor/meteor"
import Home from '../import/UI/home.svelte'

Meteor.startup(function() {
    new Home({
        target: document.getElementById('root')
    })
})