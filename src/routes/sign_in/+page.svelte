<script lang="ts">
	import SignIn from '../../lib/components/SignIn.svelte';

	import { goto } from "$app/navigation"
	import { onMount } from "svelte"
	import { auth } from '../../stores/auth'

	onMount(() => {
		return auth.subscribe((user) => {
			if (user) goto('/')
		})
	})
</script>

<SignIn />