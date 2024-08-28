<script lang="ts">
    let naam = 'Bob de Bouwer';
	let expertise = 'FE development in TS en svelte';
	let salaris = 5000;
	let avatar = '/man.png'
</script>

<div>
    <img src={avatar} alt="Avatar">
    <h4>{naam} {salaris}€</h4>
    <p>{expertise}</p>
</div>

<style>

</style>