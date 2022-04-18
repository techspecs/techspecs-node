import { techspecs } from "techspecs";

// self invoking async function
(async () => {
  // TechSpecs API Key
  const techspecs_key = "techspecs_api_key";

  // TechSpecs base https://apis.dashboard.techspecs.io/{techspecs_base}
  const techspecs_base = "a8TD3mkN49fhg2y";

  // choose between "pretty" or "raw" mode for viewing response
  const response = await techspecs.categories(
    techspecs_base,
    techspecs_key,
    (mode = "pretty")
  );

  // print the list of all categories
  console.log(response);
})();
