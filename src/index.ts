import axios from "axios";
import { query, mode, dateObj } from "./types";

async function search(
  techspecs_base: string,
  query: query,
  key: string,
  mode: mode = "raw"
) {
  const url = `https://apis.dashboard.techspecs.io/${techspecs_base}/api/product/search?query=${query.keyword.replace(
    " ",
    "%20"
  )}`;
  const headers = {
    Accept: "application/json",
    "x-blobr-key": key,
    "Content-Type": "application/json",
  };
  const payload = { category: query.category };
  const req = await axios.post(url, payload, {
    headers: headers,
  });

  if (mode === "raw") {
    return req.data.data;
  } else if (mode === "pretty") {
    try {
      return req.data.data.results;
    } catch (err) {
      return req.data.data;
    }
  } else {
    return "Invalid Mode";
  }
}

async function detail(
  techspecs_base: string,
  techspecs_id: string,
  key: string,
  mode = "raw"
) {
  const url = `https://apis.dashboard.techspecs.io/${techspecs_base}/api/product/get/${techspecs_id}`;
  const header = {
    Accept: "application/json",
    "Accept-Encoding": "gzip, deflate",
    "x-blobr-key": key,
  };
  const req = await axios.get(url, {
    headers: header,
  });
  if (mode === "raw") {
    return req.data.data;
  } else if (mode === "pretty") {
    try {
      const mod_list = req.data.data.product;
      const modified_data = [];
      for (const m of mod_list) {
        // destruct object upto 2 levels
        const mod_object: Object = {};

        for (const [key, value] of Object.entries(m)) {
          if (typeof value === "object") {
            for (const [key2, value2] of Object.entries(value as object)) {
              // @ts-ignore
              mod_object[key2] = value2;
            }
          } else {
            // @ts-ignore
            mod_object[key] = value;
          }
        }
        modified_data.push(mod_object);
      }
      return modified_data;
    } catch (err) {
      return req.data.data;
    }
  } else {
    return "Invalid Mode";
  }
}

async function brands(techspecs_base: string, key: string, mode = "raw") {
  const url = `https://apis.dashboard.techspecs.io/${techspecs_base}/api/product/brands`;
  const header = {
    Accept: "application/json",
    "x-blobr-key": key,
  };
  const req = await axios.get(url, {
    headers: header,
  });
  if (mode === "raw") {
    return req.data.data;
  } else if (mode === "pretty") {
    try {
      return req.data.data.brands;
    } catch (err) {
      return req.data.data;
    }
  } else {
    return "Invalid Mode";
  }
}

async function categories(techspecs_base: string, key: string, mode = "raw") {
  const url = `https://apis.dashboard.techspecs.io/${techspecs_base}/api/category/getAll`;
  const header = {
    Accept: "application/json",
    "x-blobr-key": key,
  };
  const req = await axios.get(url, {
    headers: header,
  });
  if (mode === "raw") {
    return req.data.data;
  } else if (mode === "pretty") {
    try {
      return req.data.data.Category[1];
    } catch (err) {
      return req.data.data;
    }
  } else {
    return "Invalid Mode";
  }
}

async function products(
  techspecs_base: string,
  brand: string[],
  category: string[],
  date: dateObj,
  page: number,
  key: string,
  mode = "raw"
) {
  const url = `https://apis.dashboard.techspecs.io/${techspecs_base}/api/product/getAll?page=${page}`;
  const header = {
    Accept: "application/json",
    "x-blobr-key": key,
    "Content-Type": "application/json",
  };
  const payload = {
    brand: brand,
    category: category,
    date: date.from,
    to: date.to,
  };

  const req = await axios.post(url, payload, {
    headers: header,
  });
  if (mode === "raw") {
    return req.data.data;
  } else if (mode === "pretty") {
    try {
      return req.data.data.product;
    } catch (err) {
      return req.data.data;
    }
  } else {
    return "Invalid Mode";
  }
}

export const techspecs = {
  search,
  detail,
  brands,
  categories,
  products,
};
