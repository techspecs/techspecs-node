import { techspecs } from "techspecs";

(async () => {
  const techspecs_key = "techspecs_api_key";
  const techspecs_base = "a8TD3mkN49fhg2y";
  const page = 1;
  const brand = ["Apple"];
  const category = ["smartphone"];
  const date = {
    from: "2010-01-01",
    to: "2022-03-15",
  };

  const response = await techspecs.products(
    techspecs_base,
    brand,
    category,
    date,
    page,
    techspecs_key,
    "pretty"
  );

  console.log(response);
})();
