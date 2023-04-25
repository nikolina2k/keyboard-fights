<script lang="ts">
    import { auth, type User } from '../../stores/auth'
    import { onMount } from "svelte"
    
    let user: User | null = null
    
    onMount(() => {
        return auth.subscribe((val) => {
            user = val;
        })
    })
</script>

<div class="card">
    {#if user}
        User email: {user.email}
    {/if}
</div>

<style>
div {
    color: white;
}
</style>