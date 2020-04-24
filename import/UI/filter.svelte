<script>
    import { onMount, onDestroy } from "svelte";
    import withTracker from '/import/components/withTracker.js'
    import { Fields } from '/import/API/Fields.js';
    import { Details } from "/import/API/Details.js";
    import { createEventDispatcher } from "svelte";

    export let language = 'en';

    let categories = [];
    let detailsNames = [];
    let selectedCategory;

    const categoriesComputation = withTracker(() => {
        Meteor.subscribe('categories');
        categories = Fields.find().fetch();
        if (categories.length > 0) {
            selectedCategory = categories[0].name
        }
    })

    const detailsNamesComputation = withTracker(() => {
        Meteor.subscribe('detailsNames', selectedCategory);
        detailsNames = Details.find().fetch();
    })

    const dispatch = createEventDispatcher();

    function changeCategory(event) {
        categoriesComputation.invalidate([event.target.value])
        dispatch('filterMessage', {
            category: event.target.value
        })
    }
</script>

<select name="categories" id="categories" on:change|preventDefault={changeCategory} >
    {#each categories as category}
        <option value="{category.category}">
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