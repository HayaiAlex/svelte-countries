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
        <div class="w-full flex flex-col justify-between gap-6 sm:flex-row">
            <Search />

            <Filter />
        </div>

        {#if $countryData}
            <div class="mt-8  pb-6 flex flex-wrap gap-6 justify-between">
                {#each $countryData as country}
                    <CountryThumbnail {country} />
                {:else}
                    <p class="h-screen dark:text-white">
                        Loading country data...
                    </p>
                {/each}
            </div>
        {/if}
    </main>
</div>

<style>
</style>
