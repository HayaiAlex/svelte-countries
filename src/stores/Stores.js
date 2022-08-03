import { writable } from "svelte/store";

export let searchTerm = writable('');
export let filter = writable('');
export let countryData = writable([]);
export let namedCountryData = writable({});
export let darkMode = writable("");