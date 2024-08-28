<script lang="ts">

	import DeveloperLijst from "./lib/DeveloperLijst.svelte";
	import type {DeveloperType} from "./types/developer";

	let developers: Array<DeveloperType> = [
		{
			id: 'AL00001',
			voornaam: 'Bob',
			achternaam: 'de Bouwer',
			salaris: 5000,
			expertise: 'FE development in TS en svelte',
			avatar: '/man.png',
			pluim: false
		},
		{
			id: 'AL00002',
			voornaam: 'Lisa',
			achternaam: 'Simpson',
			salaris: 7000,
			expertise: 'BE development in NodeJS',
			avatar: '/vrouw.png',
			pluim: false
		},
		{
			id: 'AL00003',
			voornaam: 'Jane',
			achternaam: 'Doe',
			salaris: 8000,
			expertise: 'Lead developer',
			avatar: '/vrouw.png',
			pluim: false
		},
		{
			id: 'AL00004',
			voornaam: 'Hannibal',
			achternaam: 'Smith',
			salaris: 9000,
			expertise: 'Architect',
			avatar: '/man.png',
			pluim: false
		},
	];
	let gildeleden: Array<DeveloperType> = [];

</script>

<main>
    <h1> Welkom TypeScripters</h1>
    <h2>Typescript Gilde</h2>
    <ol>
        {#each gildeleden as lid (lid.id)}
            <li>{lid.voornaam}</li>
        {/each}
    </ol>
    <DeveloperLijst {developers}/>
</main>

<style>

</style>
