<script lang='ts'>
    import { paginate, PaginationNav } from 'svelte-paginate'

    export let items: string[] = [];
    export let pageSize: number = 10;
    let currentPage = 1;
    $: paginatedItems = paginate<string>({ items, pageSize, currentPage });
</script>

<ul class="items">
{#each paginatedItems as item}
    <li class="item">
        {item}
    </li>
{/each}
</ul>

<PaginationNav
  totalItems="{items.length}"
  pageSize="{pageSize}"
  currentPage="{currentPage}"
  limit="{1}"
  showStepOptions="{true}"
  on:setPage="{(e) => currentPage = e.detail.page}"
/>
