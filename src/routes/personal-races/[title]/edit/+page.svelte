<script lang="ts">
  import type { UserRace as UserRaceType } from '$lib/types/UserRace';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { goto } from '$app/navigation';
  import { getUserRace } from '$lib/components/UserRaces';
  import UserRace from '$lib/components/UserRace.svelte';
  import { auth } from '../../../../stores/auth';
  import CreateRace from '$lib/components/CreateRace.svelte';

  let raceInfo = writable<UserRaceType | null>(null);

  const fetchInfo = async () => {
    if (!$auth || !$auth.uid) {
      await goto('/');
      return;
    }

    let record = await getUserRace($auth.uid, $page.params.title);
    if (!record.exists()) {
      await goto('../');
      return;
    }
    $raceInfo = {
      ...record.data()!,
      title: $page.params.title,
    } as UserRaceType;
  };

  onMount(async () => {
    await fetchInfo();
  });
</script>

{#if $raceInfo == null}
  Loading...
{:else}
  <CreateRace value={$raceInfo.words.join(' ')} title={$raceInfo.title} />
{/if}
