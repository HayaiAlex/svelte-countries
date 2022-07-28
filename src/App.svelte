<!-- Your users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

- Cache api data!
-->
<script>
  import router from "page";
  import Index from "./routes/Index.svelte";
  import Country from "./routes/Country.svelte";
  import NotFound from "./routes/NotFound.svelte";
  import Header from "./components/Header.svelte";

  import { countryData, namedCountryData } from "./stores/Stores";

  const getData = async () => {
    let data = await fetch("https://restcountries.com/v3.1/all");
    let readableData = await data.json();
    let newData = {};
    readableData.forEach((country) => {
      newData[country.name.common] = country;
    });
    $namedCountryData = newData;

    readableData.sort(function (a, b) {
      if (a.name.common < b.name.common) return -1;
      if (a.name.common > b.name.common) return 1;
      return 0;
    });
    $countryData = readableData;
  };

  getData();

  let page;
  let params;

  router("/", () => (page = Index));
  router(
    "/country/:countryName",
    (ctx, next) => {
      params = ctx.params;
      next();
    },
    () => (page = Country)
  );
  router("/*", () => (page = NotFound));

  router.start();
</script>

<Header />
<svelte:component this={page} {params} />
