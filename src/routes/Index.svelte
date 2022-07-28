<script>
    import Header from "../components/Header.svelte";
    import Search from "../components/Search.svelte";
    import Filter from "../components/Filter.svelte";
    import CountryThumbnail from "../components/CountryThumbnail.svelte";

    import { countryData, namedCountryData } from "../stores/Stores";

    const getData = async () => {
        let data = await fetch("https://restcountries.com/v3.1/all");
        $countryData = await data.json();
        console.log($countryData);
        let newData = {};
        $countryData.forEach((country) => {
            newData[country.name.common] = country;
        });
        $namedCountryData = newData;
    };

    getData();
</script>

<main class="bg-gray-50 h-screen w-screen pt-6 px-8">
    <!-- Main Page -->
    <div class="w-full flex justify-between">
        <Search />

        <Filter />
    </div>

    {#if $countryData}
        <div class="mt-8 flex flex-wrap gap-6 justify-between">
            {#each $countryData as country}
                <CountryThumbnail {country} />
            {:else}
                <p>Loading country data...</p>
            {/each}
        </div>
    {/if}
</main>

<style>
</style>
