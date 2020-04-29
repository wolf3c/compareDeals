<script>
    import marked from 'marked';

    export let language = 'zh';
    export let category = {};
    export let content = [];
</script>

<!----------------------------------HTML------------------------------------->

<table>
    <colgroup span='1' align="center" valign="middle" class="col-1"></colgroup>

    <tr>
        <th>Content</th>
        {#each content as cell}
            <th>
                {@html marked(
                    language in cell ?
                    cell[language] : 
                        'en' in cell ?
                        cell.en : 
                        cell.name
                )}
            </th>
        {/each}
    </tr>

    {#each category.items as row}
    <tr>
        <td class="{row.parent ? 'sub' : null}">
            {@html marked(
                language in row ? 
                row[language] :
                    'en' in row ? 
                    row.en : 
                        'name' in row ?
                        row.name :
                        '-'
            )}
        </td>

        {#each content as cell}
        <td>
            {@html marked(
                cell[row.name] === undefined  ?
                '' :
                    typeof cell[row.name] != 'object' ?
                    cell[row.name].toString() : 
                        language in cell[row.name] ?
                        cell[row.name][language] :
                            "en" in cell[row.name] ? 
                            cell[row.name]["en"] :
                            ''
            )}
        </td>
        {/each}
    </tr>
    {/each}
</table>

<!----------------------------------CSS------------------------------------->

<style>
    table {
        border-collapse: collapse;
    }

    th {
        border-bottom: 1px solid #0000002f;
        padding: 8px 16px;
        text-align: left;
    }

    td {
        padding: 8px 16px;
        border-bottom: 1px solid #00000012;
    }

    tr>td:first-child {
        font-weight: 500;
        text-align: left;
    }

    .sub {
        font-size: 0.9rem;
        padding-left: 2em;
        color: #000000ad;
    }
</style>
