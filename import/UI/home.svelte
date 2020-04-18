<script>
    import { FirstColumn, ColumnContent} from '../API/content.js'

    let title = FirstColumn.name
    let c = FirstColumn.column
    let col = ColumnContent
</script>

<table cellpadding='10'>
    <colgroup span='1' align="center" valign="middle" class="col-1"></colgroup>

    <caption>{title.en}</caption>
    <tr>
        <th>Content</th>
        <th>{col.name}</th>
    </tr>
    {#each c as c}
        {#if c.column}
            {#each c.column as sc}
            <tr>
                <td>{sc.name}</td>
                <td>{col[c.name][sc.name]}</td>
            </tr>
            {/each}
        {:else}
            <tr>
                <td>{c.name}</td>
                <td>
                    {#if col[c.name]["en"]}
                        {col[c.name]["en"]}
                    {:else}
                        {col[c.name]}
                    {/if}
                </td>
            </tr>
        {/if}
    {/each}
</table>

<style>
    caption {
        font-size: 1.3rem;

    }
    tr>td:first-child {
        font-weight: 900;
        text-align: right;
    }
</style>