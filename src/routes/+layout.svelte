<script lang="ts">
  import { invalidate } from '$app/navigation';
  import { onMount } from 'svelte';

  export let data;

  let { supabase, session } = data
  $: ({ supabase, session } = data);

  let cached_event = ''

  onMount(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, _session) => {
      if (_session?.expires_at !== session?.expires_at) {
        invalidate('supabase:auth')
      }
      
      if (cached_event && event === cached_event) {
        console.log('same event as last time')
        return
      }
      cached_event = event

      if (event === 'SIGNED_IN') {
        console.log('recevied new SIGNED_IN event')
        const { data, error } = await supabase.from('messages').select('*')
        console.log('users messages', data, error)
      }
    });

    return () => subscription.unsubscribe();
  });
</script>

<nav style="border: solid; border-width: 0 0 2px; padding-bottom: 5px;">
  <a href="/">Home</a>
  {#if session}
    <a href="/app">App</a>
    <a href="/admin">Admin</a>
    <img style="width: 32px; height: 32px; border-radius: 9999px;" src={session.user.user_metadata.avatar_url} alt="person_avatar">
    <form method="POST" action="login?/signout">
      <button>Logout</button>
    </form>
    <form method="POST" action="admin?/genlink">
      <input type="hidden" name="email" value="jrev@pm.me">
      <button>Generate Link</button>
    </form>
  {:else}
    <a href='/login'>Login</a>
    <!-- <button style="margin-top: 12px;" on:click={() => { signInOAuth('github') }}>Github Login</button> -->
  {/if}
</nav>

<slot />