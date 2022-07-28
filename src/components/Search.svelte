<script>
  import Fa from "svelte-fa";
  import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

  import { searchTerm } from "../stores/Stores";
</script>

<div class="bg-white shadow flex items-center gap-4 py-1 px-3 rounded w-max">
  <Fa class="brightness-200 invert-4" icon={faMagnifyingGlass} />
  <input
    bind:value={$searchTerm}
    on:input={() => console.log($searchTerm)}
    class="focus:outline-none text-xs font-semibold h-8 w-60"
    type="text"
    name="search"
    placeholder="Search for a country..."
  />
</div>
