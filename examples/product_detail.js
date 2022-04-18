// Get the standardized specifications of a specified product

import { techspecs } from "techspecs";

// self invoking async function
(async () => {
  // TechSpecs API Key
  const techspecs_key = "techspecs_api_key";

  // TechSpecs base https://apis.dashboard.techspecs.io/{techspecs_base}
  const techspecs_base = "a8TD3mkN49fhg2y";

  // TechSpecs product id
  const techspecs_id = "6186b047987cda5f88311983";

  // choose between "pretty" or "raw" mode for viewing response
  const response = await techspecs.detail(
    techspecs_base,
    techspecs_id,
    techspecs_key,
    (mode = "pretty")
  );

  // print the specifications of the product
  console.log(response);
})();
