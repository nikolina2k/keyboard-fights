<script lang='ts'>
    import type { UserRace } from "$lib/types/UserRace";
    import RaceEditButtons from "./RaceEditButtons.svelte";
    import RaceWordsShowcase from "./RaceWordsShowcase.svelte";

    export let raceInfo: UserRace;

</script>

<div class='container'>
    <RaceWordsShowcase items={raceInfo.words} pageSize={10}/>
    <RaceEditButtons title={raceInfo.title}/>
</div>

<style>
    .container {
        color: white;
        font-weight: bold;
        margin: 20px auto;
        width: auto;
        min-width: 300px; 
        height: 464px;
        border-radius: 10px;
        box-shadow: #f05e5e 0 10px 20px -10px;
        border: none;
        background-color: rgba(0, 0, 0, .4);
        backdrop-filter: blur(10px);display: flex;
        flex-direction: column;
        justify-content:space-around;
        text-align: left;
        padding: 2rem;
        font-family: sans-serif;

        white-space: nowrap;
    }
</style>