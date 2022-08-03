<script>
    import { onMount } from "svelte";
    import { namedCountryData, countryData, darkMode } from "../stores/Stores";

    import page from "page";
    import Fa from "svelte-fa";
    import {
        faArrowLeftLong,
        faKitMedical,
    } from "@fortawesome/free-solid-svg-icons";
    import CountryStat from "../components/CountryStat.svelte";

    export let params;

    let countryName = "";
    let status = "loading";
    let country = {};

    const getCountryName = async (update) => {
        countryName = params.countryName;
        console.log(window.location.href);
        console.log(`country name ${countryName}`);
    };

    const update = (countryName, data) => {
        for (const countryData in $namedCountryData) {
            if (countryName.toLowerCase() === countryData.toLowerCase()) {
                country = $namedCountryData[countryData];
                console.log(country);
                return "found";
            }
        }
        if (Object.keys($namedCountryData).length > 0) {
            return "not found";
        }
        return "loading";
    };

    const getNameFromCode = (code) => {
        for (const country in $countryData) {
            if (code === $countryData[country].cca3) {
                return $countryData[country].name.common;
            }
        }
        return code;
    };

    $: status = update(countryName, $namedCountryData);

    onMount(() => getCountryName());
</script>

<div class={$darkMode}>
    <main class="bg-white dark:bg-gray-800 h-screen pt-6 px-8">
        <a
            href="/svelte-countries/"
            class="flex items-center gap-2 shadow-strong w-max py-1 px-6 rounded dark:bg-gray-600"
        >
            <Fa class="dark:text-white" icon={faArrowLeftLong} />
            <p class="dark:text-white">Back</p>
        </a>

        {#if status === "found"}
            <div class="mt-4 flex md:flex-row flex-col gap-10 items-center">
                <img
                    class="w-5/12"
                    src={country.flags.svg}
                    alt="Flag of {country.name.common}"
                />
                <div class="flex flex-col">
                    <h2 class="font-bold text-2xl dark:text-white">
                        {country.name.common}
                    </h2>
                    <div class="grid mt-4">
                        <CountryStat
                            label={"Native Name:"}
                            stat={country.altSpellings[1]}
                        />
                        <CountryStat
                            label={"Population:"}
                            stat={country.population}
                        />
                        <CountryStat label={"Region:"} stat={country.region} />

                        <CountryStat
                            label={"Sub Region:"}
                            stat={country.subregion}
                        />
                        <CountryStat
                            label={"Capital:"}
                            stat={country.capital[0]}
                        />

                        <CountryStat
                            label={"Top Level Domain:"}
                            stat={country.tld[0]}
                        />
                        <CountryStat
                            label={"Currencies:"}
                            stat={country.currencies}
                        />
                        <CountryStat
                            label={"Languages:"}
                            stat={country.languages}
                        />
                    </div>
                    <div class="flex gap-2 items-center mt-4">
                        <h3 class="font-semibold mr-2 dark:text-white">
                            Border Countries:
                        </h3>
                        {#if country.borders}
                            <div class="flex flex-wrap gap-2">
                                {#each country.borders as country}
                                    <a
                                        on:click={() =>
                                            setTimeout(() => {
                                                getCountryName();
                                            }, 50)}
                                        href="/svelte-countries/country/{getNameFromCode(
                                            country
                                        )}"
                                        class="px-4 py-0.25 rounded shadow-strong dark:bg-gray-600 dark:text-gray-200"
                                    >
                                        {getNameFromCode(country)}
                                    </a>
                                {/each}
                            </div>
                        {:else}
                            <p class="dark:text-gray-200">None</p>
                        {/if}
                    </div>
                </div>
            </div>
        {:else if status === "loading"}
            <p class="mt-2">Looking for country.</p>
        {:else}
            <p class="mt-2">No country found</p>
        {/if}
    </main>
</div>
