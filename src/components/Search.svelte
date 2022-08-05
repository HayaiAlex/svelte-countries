<script>
  import { darkMode } from "../stores/Stores";
  import Fa from "svelte-fa";
  import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

  import { searchTerm } from "../stores/Stores";
</script>

<div class={$darkMode}>
  <div
    class="w-auto max-w-sm bg-white shadow flex items-center gap-4 py-1 px-3 rounded dark:bg-gray-600 transition"
  >
    <Fa
      class="text-gray-400 dark:text-white transition"
      icon={faMagnifyingGlass}
    />
    <input
      bind:value={$searchTerm}
      on:input={() => console.log($searchTerm)}
      class="focus:outline-none text-xs font-semibold h-8 w-60 dark:bg-gray-600 dark:text-white transition"
      type="text"
      name="search"
      placeholder="Search for a country..."
    />
  </div>
</div>
