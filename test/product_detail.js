import { techspecs } from "techspecs";

(async () => {
  const techspecs_key = "techspecs_api_key";
  const techspecs_base = "a8TD3mkN49fhg2y";
  const techspecs_id = "6186b047987cda5f88311983";
  const response = await techspecs.detail(
    techspecs_base,
    techspecs_id,
    techspecs_key,
    (mode = "pretty")
  );

  console.log(response);
})();
