<script lang="ts">

	import DeveloperLijst from "./lib/DeveloperLijst.svelte";
	import type {DeveloperType} from "./types/developer";
    import leden from "./gilde-store";

	let developers: Array<DeveloperType> = [
		{
			id: 'AL00001',
			voornaam: 'Bob',
			achternaam: 'de Bouwer',
			expertise: 'FE development in TS en svelte',
			avatar: '/man.png',
			pluim: false
		},
		{
			id: 'AL00002',
			voornaam: 'Lisa',
			achternaam: 'Simpson',
			expertise: 'BE development in NodeJS',
			avatar: '/vrouw.png',
			pluim: false
		},
		{
			id: 'AL00003',
			voornaam: 'Jane',
			achternaam: 'Doe',
			expertise: 'Lead developer',
			avatar: '/vrouw.png',
			pluim: false
		},
		{
			id: 'AL00004',
			voornaam: 'Hannibal',
			achternaam: 'Smith',
			expertise: 'Architect',
			avatar: '/man.png',
			pluim: false
		},
	];
	let gildeleden: Array<DeveloperType> = [];

	function addToGilde(event: CustomEvent<DeveloperType>) {
		const nieuwlid = event.detail;
		gildeleden = [...gildeleden, nieuwlid];
    }
</script>

<main>
    <h1> Welkom TypeScripters</h1>
    {#if gildeleden.length > 0}
        <h2>Typescript Gilde</h2>
    {/if}
    <ol>
        {#each $leden as lid}
            <li>{lid.voornaam}</li>
        {:else }
            <p>Nodig leden uit</p>
        {/each}
    </ol>
    <DeveloperLijst {developers} on:add={addToGilde}/>
</main>

<style>

</style>
