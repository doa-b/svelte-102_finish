<script lang="ts">

	import DeveloperLijst from "./lib/DeveloperLijst.svelte";
	import type {Developer} from "./types/developer";

	let developers: Array<Developer> = [
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
	]
</script>

<main>
    <h1> Welkom TypeScripters</h1>
      <div>
       <DeveloperLijst/>
    </div>
</main>

<style>
 div {
  width: 250px;
 }
</style>
