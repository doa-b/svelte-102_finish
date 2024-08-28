<script lang="ts">

	import DeveloperLijst from "./lib/DeveloperLijst.svelte";
	import type {DeveloperType} from "./types/developer";
    import Gilde from "./lib/Gilde.svelte";

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

</script>

<main>
    <h1> Welkom TypeScripters</h1>
    <Gilde/>
    <DeveloperLijst {developers}/>
</main>

<style>
</style>
