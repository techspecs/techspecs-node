import { techspecs } from "techspecs";

(async () => {
  const techspecs_key = "techspecs_api_key";
  const techspecs_base = "a8TD3mkN49fhg2y";
  const query = {
    keyword: "iPhone 13",
    category: "all",
  };
  const response = await techspecs.search(base, query, key, (mode = "pretty"));

  console.log(response);
})();
