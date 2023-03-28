<script lang="ts">
	import Navbar from '../components/Navbar.svelte';
</script>

<div class="container">
<Navbar />
<slot />
</div>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .container {
        display: flex;
        flex-direction: column;
    }
    </style>