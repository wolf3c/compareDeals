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

    let category = [];
    let detail = []; 
    let selectedCategory;

    const computation = withTracker(() => { 
        Meteor.subscribe('fields');
        category = Fields.findOne();
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

<div class="head">
    <div class="head-content">
        <h1>货比三家，找到最佳</h1>
        <div class="filter">
            <Filter language={language} on:filterMessage={handleMessage}/>
        </div>
    </div>
    
</div>

<div class="sheet">
    {#if !(typeof category === 'undefined')}
        <Sheet language={language} category={category} content={detail} />
    {/if}
</div>

<style>
    .head {
        background: #6666ff;
        height: 33vh;
        width: 100%;
    }

    .head-content {
        position: relative;
        top: 25%;
    }

    h1 {
        margin: 0;
        text-align: center;
        font-size: 3rem;
        color: white;
    }

    .filter {
        position: relative;
        top: 1.5rem;
        display: flex;
        display: -webkit-flex; /* Safari */
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .sheet {
        padding: 1rem 0 0 1rem;
    }
</style>