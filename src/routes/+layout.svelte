<script lang="ts">
	import Navbar from '../components/Navbar.svelte';
</script>

<div class="container">
<Navbar />
<slot />
</div>

<style>

    .container {
        display: flex;
        flex-direction: column;
    }
    
</style>