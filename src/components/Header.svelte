<script>
  import Fa from "svelte-fa";
  import { faMoon } from "@fortawesome/free-solid-svg-icons";
</script>

<div
  class="flex items-center py-3 px-8 w-full bg-white border-b-3 border-gray-100"
>
  <a href="http://127.0.0.1:5173/" class="text-2xl font-extrabold mr-auto"
    >Where in the world?</a
  >

  <Fa class="mr-1 w-4" icon={faMoon} />
  <p class="font-semibold">Dark Mode</p>
</div>
