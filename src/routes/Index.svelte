<script>
    import { darkMode } from "../stores/Stores";
    import Header from "../components/Header.svelte";
    import Search from "../components/Search.svelte";
    import Filter from "../components/Filter.svelte";
    import CountryThumbnail from "../components/CountryThumbnail.svelte";

    import { countryData } from "../stores/Stores";
</script>

<div class={$darkMode}>
    <main class="bg-gray-50 pt-6 px-8 dark:bg-gray-700 transition">
        <!-- Main Page -->
        <div class="w-full flex flex-col justify-between gap-2 sm:flex-row">
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
</div>

<style>
</style>
