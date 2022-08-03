<script>
  import Fa from "svelte-fa";
  import { faMoon } from "@fortawesome/free-solid-svg-icons";

  import { darkMode } from "../stores/Stores";

  const toggleDarkMode = () => {
    if (!$darkMode) {
      $darkMode = "dark";
    } else {
      $darkMode = "";
    }
    console.log(`Dark mode set to ${$darkMode}`);
  };
</script>

<div class={$darkMode}>
  <div
    class="flex items-center py-3 px-8 w-full bg-white border-b-3 border-gray-100 dark:bg-slate-600 dark:border-slate-800 transition"
  >
    <a
      href="/svelte-countries/"
      class="text-2xl font-extrabold mr-auto dark:text-white"
      >Where in the world?</a
    >

    <div on:click={toggleDarkMode}>
      <Fa class="cursor-pointer mr-1 w-4 dark:text-white" icon={faMoon} />
    </div>
    <p class="font-semibold dark:text-white">Dark Mode</p>
  </div>
</div>
