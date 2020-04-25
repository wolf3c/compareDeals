<script>
    import { onMount, onDestroy } from "svelte";
    import withTracker from '/import/components/withTracker.js'
    import { Fields } from '/import/API/Fields.js';
    import { Details } from "/import/API/Details.js";
    import { createEventDispatcher } from "svelte";

    export let language = 'en';
    export let categories = [];

    let selected;
    let select;

    const dispatch = createEventDispatcher();

    $: dispatch('filterMessage', {
        category: selected
    })
</script>

<select bind:value={selected}>
    {#each categories as category}
        <option value="{category}">
        {
            category[language] ? 
            category[language] : 
                category.en ? 
                category.en :
                category.category
        }
        </option>
    {/each}
</select>