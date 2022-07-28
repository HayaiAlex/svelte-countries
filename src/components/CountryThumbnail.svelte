<script>
    export let country;

    import { filter, searchTerm } from "../stores/Stores";

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
    <a
        href="/country/{country.name.common}"
        class="bg-white rounded w-56 shadow"
    >
        <img class="rounded-t h-36 w-full" src={country.flags.svg} alt="flag" />

        <!-- content -->
        <div class="p-4">
            <h2 class="font-bold">{country.name.common}</h2>

            <div class="mt-2 mb-4 flex flex-col">
                <div class="h-5">
                    <p class="inline text-xs text-gray-800 font-bold">
                        Population:
                    </p>
                    <p class="inline text-xs text-gray-500 font-semibold">
                        {country.population}
                    </p>
                </div>
                <div class="h-5">
                    <p class="inline text-xs text-gray-800 font-bold">
                        Region:
                    </p>
                    <p class="inline text-xs text-gray-500 font-semibold">
                        {country.region}
                    </p>
                </div>
                <div class="h-5">
                    <p class="inline text-xs text-gray-800 font-bold">
                        Capital:
                    </p>
                    <p class="inline text-xs text-gray-500 font-semibold">
                        {country.capital}
                    </p>
                </div>
            </div>
        </div>
    </a>
{/if}
