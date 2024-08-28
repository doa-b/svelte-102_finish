<script lang="ts">

import leden from "../gilde-store";
</script>

<div>
    {#if $leden.length > 0}
        <h2>Typescript Gilde</h2>
    {/if}
    <ol>
        {#each $leden as lid}
            <li>{lid.voornaam}</li>
        {:else }
            <p>Nodig leden uit</p>
        {/each}
    </ol>
</div>

<style>
</style>