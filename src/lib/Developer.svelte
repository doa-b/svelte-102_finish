<script lang="ts">
    let naam = 'Bob de Bouwer';
	let expertise = 'FE development in TS en svelte';
	let salaris = 5000;
	let avatar = '/man.png'
</script>

<div class="card">
    <img src={avatar} alt="Avatar">
    <h4>{naam} {salaris}€</h4>
    <p>{expertise}</p>
</div>

<style>
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