<script>
  import Fa from "svelte-fa";
  import { faMoon } from "@fortawesome/free-solid-svg-icons";

  import { darkMode } from "../stores/Stores";

  const toggleDarkMode = () => {
    if (!$darkMode) {
      window.localStorage.setItem("theme", "dark");
      $darkMode = "dark";
    } else {
      window.localStorage.setItem("theme", "");
      $darkMode = "";
    }
    console.log(`Dark mode set to ${$darkMode}`);
  };
</script>

<div class={$darkMode}>
  <div
    class="flex items-center py-3 px-8 w-full h-20 bg-white border-b-3 border-gray-100 dark:bg-gray-600 dark:border-gray-800 transition"
  >
    <a
      href="/svelte-countries/"
      class="hover:text-gray-700 text-md sm:text-2xl font-extrabold mr-auto dark:text-white"
      >Where in the world?</a
    >

    <div on:click={toggleDarkMode}>
      <Fa
        class="hover:text-gray-700 cursor-pointer text-sm sm:text-lg mr-1 w-4 dark:text-white"
        icon={faMoon}
      />
    </div>
    <p class="font-semibold text-sm sm:text-lg dark:text-white">Dark Mode</p>
  </div>
</div>
