<script lang="ts">

import Developer from "./Developer.svelte";
</script>

<div>
    <Developer voornaam="Lisa" achternaam="Simpson" expertise="Backend developer in NodeJS" avatar="/vrouw.png"/>
    <Developer voornaam="Lisa" achternaam="Simpson" expertise="Backend developer in NodeJS" avatar="/vrouw.png"/>
    <Developer voornaam="Lisa" achternaam="Simpson" expertise="Backend developer in NodeJS" avatar="/vrouw.png"/>
    <Developer voornaam="Lisa" achternaam="Simpson" expertise="Backend developer in NodeJS" avatar="/vrouw.png"/>
</div>

<style>
    div {
        padding: 10px;
        width: 100%;
        display: grid;
        grid-template-columns: 300px 300px;
        grid-gap: 2rem;
    }
</style>