import { techspecs } from "techspecs";

(async () => {
  const techspecs_key = "techspecs_api_key";
  const techspecs_base = "a8TD3mkN49fhg2y";
  const response = await techspecs.categories(
    techspecs_base,
    techspecs_key,
    (mode = "pretty")
  );

  console.log(response);
})();
