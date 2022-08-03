<script>
    export let country;

    import { filter, searchTerm, darkMode } from "../stores/Stores";

    function update(filter, searchTerm) {
        if (filter.length > 0 && country.region !== filter) {
            return false;
        }
        if (
            searchTerm.length > 0 &&
            country.name.common.toLowerCase().search(searchTerm) < 0
        ) {
            return false;
        }
        return true;
    }

    $: show = update($filter, $searchTerm);
</script>

{#if show}
    <a href="/svelte-countries/country/{country.name.common}" class={$darkMode}>
        <div class="w-56 shadow rounded bg-white dark:bg-gray-600">
            <img
                class="rounded-t h-36 w-full"
                src={country.flags.svg}
                alt="flag"
            />

            <!-- content -->
            <div class="p-4">
                <h2 class="font-bold dark:text-white">{country.name.common}</h2>

                <div class="mt-2 mb-4 flex flex-col">
                    <div class="h-5">
                        <p
                            class="inline text-xs text-gray-800 font-bold dark:text-white"
                        >
                            Population:
                        </p>
                        <p
                            class="inline text-xs text-gray-500 font-semibold dark:text-gray-300"
                        >
                            {country.population}
                        </p>
                    </div>
                    <div class="h-5">
                        <p
                            class="inline text-xs text-gray-800 font-bold dark:text-white"
                        >
                            Region:
                        </p>
                        <p
                            class="inline text-xs text-gray-500 font-semibold dark:text-gray-300"
                        >
                            {country.region}
                        </p>
                    </div>
                    <div class="h-5">
                        <p
                            class="inline text-xs text-gray-800 font-bold dark:text-white"
                        >
                            Capital:
                        </p>
                        <p
                            class="inline text-xs text-gray-500 font-semibold dark:text-gray-300"
                        >
                            {country.capital}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </a>
{/if}
