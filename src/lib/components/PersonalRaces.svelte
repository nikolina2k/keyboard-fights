<script lang='ts'>
    import { PaginationNav } from 'svelte-paginate'
    import RaceEditButtons from './RaceEditButtons.svelte';
    import type { Pagination } from "$lib/types/Pagination";
    import type { UserRace } from "$lib/types/UserRace";
    import { goto } from '$app/navigation';
    import { base } from '$app/paths';
    import { auth } from '../../stores/auth';
    import { getUserRaces } from '$lib/components/UserRaces';
    import { writable } from 'svelte/store';
    import { onMount } from 'svelte';
    import { ceil } from 'lodash';
    
    let currentPage = 1;
    let pageSize = 4;
    
    const fetchPagination = async (pageSize: number, lastItem: undefined | string, asc: boolean = true): Promise<Pagination<UserRace>> => {
        if (!$auth || !$auth.uid) {
            await goto('/');
            return {count: 0, items: []};
        }
        
        return await getUserRaces($auth.uid, pageSize, lastItem, asc)
    }

    
    let currentPagination = writable<Pagination<UserRace>>({count: 0, items: []});
    
    const updatePage = async (asc: boolean) => {
        let lastItem = undefined;
        if (asc) {
            lastItem = $currentPagination.items.slice(-1)[0].title;
        } else {
            lastItem = $currentPagination.items[0].title;
        }

        let pagination = await fetchPagination(pageSize, lastItem, asc);

        if (!asc) {
            pagination.items = pagination.items.reverse();
        }
        currentPage += asc ?  1 : -1;
        $currentPagination = pagination;
    }
    
    onMount(async () => {
        $currentPagination = await fetchPagination(pageSize, undefined)
    });

</script>

<main>
    <div class='container'>
        <div>
            <h1>Your races</h1>
            {#each $currentPagination.items as item}
                <div class="race-preview">
                    <a class='race-link' href='{item.title}'>{item.title}</a>
                    <RaceEditButtons title={item.title}/>
                </div>
            {/each}
            {#if (currentPage - 1) * pageSize > 0}
            <button on:click={async () => {await updatePage(false)}}>Prev Page</button>
            {/if}
            {#if ceil($currentPagination.count / pageSize) >= (currentPage + 1)}
                <button on:click={async () => {await updatePage(true)}}>Next Page</button>
            {/if}
        </div>
        <button on:click={() => goto(`${base}/create-race`)}>Create new race</button>
    </div>
</main>


<style>

.container {
    color: white;
    font-weight: bold;
    margin: 20px auto;
    width: auto; 
    height: 464px;
    border-radius: 10px;
    box-shadow: #f05e5e 0 10px 20px -10px;
    border: none;
    background-color: rgba(0, 0, 0, .4);
    backdrop-filter: blur(10px);display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    padding: 2rem;
    font-family: sans-serif;

    white-space: nowrap;
}

button {
    font-size: 14px;
    font-weight: 600;
    padding: 7px 20px;
    margin-right: 5px;
    display: inline-block;
    align-self: center;
    text-decoration: none;
    width: 50%;
    border-radius: 100px;
    transition: all 250ms;
    border: 0;
    font-size: 16px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
}

button:hover {
    top: 3px;
    cursor: pointer;
    transform: scale(1.05);
}

.race-preview {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5px;
    border-top: whitesmoke;
    border-bottom: 1px solid whitesmoke;
}

.race-link {
    display: flex;
    align-items: center;
}
</style>
