
<!-- Your users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)* -->

<script>
import Header from './lib/Header.svelte';
import MainSearch from './lib/MainSearch.svelte';

async function getData() {
  let data = await fetch('https://restcountries.com/v3.1/all');
  let json = await data.json();
  console.log(json);
}

getData();
</script>

<Header />

<MainSearch />

<style>
</style>