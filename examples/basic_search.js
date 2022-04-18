// Search for a product by name, version or features
import { techspecs } from "techspecs";

// self invoking async function
(async () => {
  // TechSpecs API Key
  const techspecs_key = "techspecs_api_key";

  // TechSpecs base https://apis.dashboard.techspecs.io/{techspecs_base}
  const techspecs_base = "a8TD3mkN49fhg2y";

  const query = {
    keyword: "iPhone 13", // product name or version number to search
    category: "all", // product category to search
  };

  // choose between "pretty" or "raw" mode for viewing response
  const response = await techspecs.search(base, query, key, (mode = "pretty"));

  // print the search results
  console.log(response);
})();
