<script lang='ts'>
    import {splitWords, validateDictionary, makeDictionary, formatWords} from '$lib/Dictionary'
    import { writable } from 'svelte/store';

    let value = '';
    let errors = writable([] as string[]);

    const submitDictionary = () => {
        let words = splitWords(value);
        let validateExceptions = validateDictionary(words);
        if (validateExceptions.length) {
            $errors = validateExceptions;
            return;
        }

        let dict = makeDictionary(words);
        // TODO insert race into database
    };

    const formatText = () => {
        let words = splitWords(value);
        words = formatWords(words);
        value = words.join(' ');
    };

</script>

<textarea bind:value class='dict-input'></textarea>

{#if $errors.length}
    <ul>
    {#each $errors as error}
        <li class='error-message'>{error}</li>
    {/each}
    </ul>
{/if}
<div>
    <button class='submit-button' on:click={submitDictionary}>Submit user race</button>
    <button class='submit-button' on:click={formatText}>Format text</button>
</div>


<style>
    textarea {
        height: 150px;
        resize: none;
    }

    .submit-button {
        min-height: 25px;
    }

    .error-message {
        color: red;
    }

</style>
