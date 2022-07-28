<script>
    import { onMount } from "svelte";
    import { namedCountryData, countryData } from "../stores/Stores";

    import Fa from "svelte-fa";
    import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

    export let params;

    let countryName = "";
    let show = false;

    const getCountryName = async () => {
        countryName = params.countryName;
    };

    const update = (countryName, test) => {
        console.log("updating", $countryData);
        for (const country in $countryData) {
            console.log(country);
            if (countryName.toLowerCase() === country.toLowerCase()) {
                console.log("Found", countryName);
            }
        }
    };

    $: show = update(countryName, $countryData);

    onMount(() => getCountryName());
</script>

<main class="bg-white h-screen w-screen pt-6 px-8">
    <a
        href="http://127.0.0.1:5173/"
        class="flex items-center gap-2 shadow-strong w-max py-1 px-6 rounded"
    >
        <Fa icon={faArrowLeftLong} />
        <p>Back</p>
    </a>

    {#if show}
        <div>
            <img src="" alt="" />
        </div>
    {:else}
        <p>No country found</p>
    {/if}
</main>
