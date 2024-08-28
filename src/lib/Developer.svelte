<script lang="ts">
	import leden from "../gilde-store";

	export let id: string;
	export let voornaam = 'Bob';
	export let achternaam = 'Bob de Bouwer';
	export let expertise = 'FE development in TS en svelte';
	export let avatar = '/man.png';
	export let pluim = false;

	function addLid() {
		const nieuwLid = {voornaam, achternaam, expertise, avatar, pluim, id};
		leden.add(nieuwLid);
	}

	$: buttonText = pluim ? 'Pak pluim af' : `Geef ${voornaam} een pluim`

</script>
<div class="card">
    <img src={avatar} alt="Avatar">
    <div class="container">
        <h4 class:highlight={pluim}>{voornaam} {achternaam} ({id})</h4>
        <p>{expertise}</p>
        <div class="controls">
            <button on:click={() => pluim = !pluim}>{(buttonText)}</button>
            <button on:click={addLid}>Maak gilde-lid</button>
        </div>
    </div>
</div>

<style>
    .highlight {
        color: deepskyblue;
    }

    .controls {
        display: flex;
        justify-content: space-between;
    }

    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        border-radius: 5px;
        box-sizing: border-box;

    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

    .container {
        padding: 2px 16px 16px 6px;
    }

    img {
        width: 100%;
        border-radius: 5px 5px 0 0;
    }

    p {
        margin: 0 0 16px 0;
    }

    h4 {
        margin: 4px 0 0 0;
    }
</style>