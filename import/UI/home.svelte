<script>
    import { Meteor } from 'meteor/meteor';
    import { Tracker } from 'meteor/tracker'
    import withTracker from '/import/components/withTracker.js'
    import { onMount, onDestroy } from "svelte";
    import { ColumnContent,  FirstColumn} from '../API/content.js';
    import { Fields } from '/import/API/Fields.js';
    import { Details } from "/import/API/Details.js";
    import Sheet from './sheet.svelte'
    import Filter from "./filter.svelte";

    let col = [];
    let detail = []; 
    let selectedCategory;

    const computation = withTracker(() => { 
        Meteor.subscribe('fields');
        col = Fields.findOne();
    });

    const detailComputation = withTracker(() => {
        Meteor.subscribe('details', selectedCategory);
        detail = Details.find().fetch()
    })

    let language = 'zh';

    function handleMessage(event) {
        selectedCategory = event.detail.category;
        detailComputation.invalidate([selectedCategory])
    }
</script>

<Filter on:filterMessage={handleMessage}/>

{#if !(typeof col === 'undefined')}
    <Sheet language={language} col={col} content={detail} />
{/if}