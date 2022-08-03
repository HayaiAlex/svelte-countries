<script>
    import { darkMode } from "../stores/Stores";
    export let label;
    export let stat;

    if (typeof stat === "object") {
        console.log(stat);
        let newStat = "";
        for (const data in stat) {
            if (stat[data].name) {
                newStat = newStat + stat[data].name + ", ";
            } else {
                newStat = newStat + stat[data] + ", ";
            }
            console.log(data);
        }
        // remove last comma
        newStat = newStat.substring(0, newStat.length - 2);
        stat = newStat;
    }
</script>

<div class="{$darkMode} flex gap-1">
    <h3 class="text-gray-800 font-semibold dark:text-white">{label}</h3>
    <p class="text-gray-600 dark:text-gray-200">{stat}</p>
</div>
