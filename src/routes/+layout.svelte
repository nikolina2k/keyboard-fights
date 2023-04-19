<script lang="ts">
	import Navbar from '../lib/components/Navbar.svelte';
    import '../app.css'
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