<script>
    export let language = 'zh';
    export let category = {};
    export let content = [];
</script>

<table>
    <colgroup span='1' align="center" valign="middle" class="col-1"></colgroup>

    <tr>
        <th>Content</th>
        {#each content as cell}
            <th>
                {
                    language in cell ?
                    cell[language] : 
                        'en' in cell ?
                        cell.en : 
                        cell.name
                }
            </th>
        {/each}
    </tr>

    {#each category.items as row}
    <tr>
        <td class="{row.parent ? 'sub' : null}">
            {
                language in row ? 
                row[language] :
                    'en' in row ? 
                    row.en : 
                        'name' in row ?
                        row.name :
                        '-'
            }
        </td>

        {#each content as cell}
        <td>
            {
                !cell[row.name] ? 
                '' :
                    cell[row.name][language] ?
                    cell[row.name][language] :
                        cell[row.name]["en"] ? 
                        cell[row.name]["en"] :
                        cell[row.name]
            }
        </td>
        {/each}
    </tr>
    {/each}
</table>

<style>
    /* caption {
        font-size: 1.3rem;
        margin-bottom: 2rem;
    } */

    table {
        border-collapse: collapse;
    }

    th {
        border-bottom: 1px solid #0000002f;
        padding: 8px 16px;
    }

    td {
        padding: 8px 16px;
        border-bottom: 1px solid #00000012;
    }

    tr>td:first-child {
        font-weight: 500;
        text-align: left;
    }

    tr>td:not(:first-child) {
        text-align: center;
    }

    .sub {
        /* font-weight: 400 !important; */
        font-size: 0.9rem;
        padding-left: 2em;
        color: #000000ad;
    }
</style>
