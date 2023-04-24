<script lang="ts">
	import Navbar from '../lib/components/Navbar.svelte'
    import '../app.css'
    import { onMount } from 'svelte'
    import { onAuthStateChanged } from 'firebase/auth'
    import { initFirebase } from '$lib/client/firebase'
    import { auth as authStore } from '../stores/auth'

    onMount(() => {
        const { auth } = initFirebase()
        onAuthStateChanged(auth, authStore.set)
    })
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