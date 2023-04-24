<script lang='ts'>
    import type { UserDict } from "$lib/types/UserDict";
    import { writable } from "svelte/store";
    import { onMount } from "svelte";
    import DictionaryShowcase from "./DictionaryShowcase.svelte";
    
    const fetchUnapproved = async (): Promise<UserDict | null> => {
        // TODO: make request to db
        return {username: 'bizuki', words: ['tldr', 'tldr', 'tldr', 'tldr', 'tldr', 'tldr', 'tldr', 'tldr', 'tldr', 'tldr', 'tldr', 'tldr', 'tldr', 'tldr', 'tldr', 'tldr', 'tldr', 'tldr', 'tldr', 'tldr', 'tldr', 'tldr', 'tldr', 'tldr']};
    }

    const fetchNext = async (): Promise<UserDict | null> => {
        // TODO: make request to db
        return {username: 'dareru', words: ['word']};
    }

    let currentDict = writable(null as UserDict | null);

    onMount(async () => {
        $currentDict = await fetchUnapproved();
    });
    
    const accept = async () => {
        // TODO: mark as accepted in firebase
        $currentDict = await fetchNext();
    }

    const reject = async () => {
        // TODO: delete from firebase
        $currentDict = await fetchNext();
    }
</script>

<main>
    <div class='approve'>
        {#if $currentDict == null}
            No more unapproved user dictionary. Well done!!
        {:else}
            New unapproved user dictionary. It should comply with following rules:
            <ul>
                <li>No offensive words</li>
                <li>Only latin symbols</li>
                <li>Lowercase</li>
            </ul>
            User dictionary by <i>{$currentDict.username}</i>
            <DictionaryShowcase items={$currentDict.words} pageSize={10}/>
            <div>
                <button on:click={accept} class='accept'>Accept</button> <button on:click={reject} class="reject">Reject</button>
            </div>
        {/if}
    </div>
</main>


<style>

.approve {
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
    justify-content: top;
    text-align: left;
    padding: 2rem;

    white-space: nowrap;
}

button {
    font-size: 14px;
    font-weight: 600;
    padding: 7px 20px;
    margin-top: 30px;
    margin-left: auto;
    display: inline-block;
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
.accept {
    color: green;
    background-color: #c2fbd7;
}
.reject {
    color: red;
    background-color: rgb(255, 211, 211);
}

button:hover {
    top: 3px;
    cursor: pointer;
    transform: scale(1.05);
}
</style>
