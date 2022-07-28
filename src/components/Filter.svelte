<script>
  import Fa from "svelte-fa";
  import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

  let optionsOpen = false;

  import { filter } from "../stores/Stores";

  function toggleOpen() {
    optionsOpen = !optionsOpen;
  }

  function selected(e) {
    if (e.target.innerText === "America") {
      $filter = "Americas";
    } else {
      $filter = e.target.innerText;
    }
    console.log($filter);
  }
</script>

<button
  on:click={toggleOpen}
  class="relative cursor-pointer bg-white shadow flex items-center justify-between gap-4 py-2 px-4 rounded w-max w-40"
>
  {#if $filter}
    <p class="text-xs font-semibold">
      {$filter}
    </p>
  {:else}
    <p class="text-xs font-semibold">Filter by Region</p>
  {/if}
  <Fa class="text-xs" icon={faChevronDown} />

  {#if optionsOpen}
    <ul
      class="bg-white w-full mt-11 py-3 px-4 rounded flex flex-col items-start font-semibold text-xs gap-1.5 absolute right-0 top-0"
    >
      <li on:click={selected} class="hover:text-gray-600">Africa</li>
      <li on:click={selected} class="hover:text-gray-600">America</li>
      <li on:click={selected} class="hover:text-gray-600">Asia</li>
      <li on:click={selected} class="hover:text-gray-600">Europe</li>
      <li on:click={selected} class="hover:text-gray-600">Oceania</li>
    </ul>
  {/if}
</button>
