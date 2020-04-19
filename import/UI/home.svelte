<script>
    import { Meteor } from 'meteor/meteor';
    import { Tracker } from 'meteor/tracker'
    import withTracker from '/import/components/withTracker.js'
    import { onMount, onDestroy } from "svelte";
    import { ColumnContent,  FirstColumn} from '../API/content.js';
    import { Fields } from '/import/API/Fields.js';
    import Sheet from './sheet.svelte'

    let col;

    const computation = withTracker(() => { 
        Meteor.subscribe('fields');
        col = Fields.findOne();
    });

    let language = 'zh';
    let content = ColumnContent;
</script>

{#if !(typeof col === 'undefined')}
    <Sheet language={language} col={col} content={content}></Sheet>
{/if}