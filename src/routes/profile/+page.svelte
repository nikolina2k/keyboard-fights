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
.card {
    margin: 20px auto;
    width: 343px; 
    height: 464px;
    border-radius: 10px;
    box-shadow: #f05e5e 0 10px 20px -10px;
    border: none;
    background-color: rgba(0, 0, 0, .4);
    backdrop-filter: blur(10px);display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: white;
}
</style>