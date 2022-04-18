![TechSpecs Logo](https://i.imgur.com/JwSpZO8.jpg)
![TechSpecs Logo](https://i.imgur.com/JZ3GqAU.jpg)

# Introducing TechSpecs JavaScript/TypeScript

This node library provides programatic access to the standardized specs of over 61,000 consumer electronics devices, including the latest smartphones, tablets, smartwatches, laptops, and more.

## Documentation

- See the [TechSpecs API Docs](https://techspecs.readme.io)

## API Key

- Get an API key [here](https://developer.dashboard.techspecs.io/)

## Requirements

- NodeJS v12.x or ES6

## Installation

![How to install TechSpecs](https://i.imgur.com/tutKl0r.png)

```sh
npm install techspecs
```

## Usage

The library needs to be configured with your account's api key and base which is
available in your [TechSpecs Dashboard](https://developer.dashboard.techspecs.io/).

Set `techspecs_key` to your key value and `techspecs_base` to your base value.

### Basic Search

#### Search for a device by specifying it's model name, version number or features

```javascript
// Search for a product by name, version or features
import { techspecs } from "techspecs";

// self invoking async function
async function search() {
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
}
```

### Advanced Search

#### List all products by brand, category and release date

```javascript
// List all products by brand, category and release date
import { techspecs } from "techspecs";

// self invoking async function
async function getProducts() => {
  // TechSpecs API Key
  const techspecs_key = "techspecs_api_key";

  // TechSpecs base https://apis.dashboard.techspecs.io/{techspecs_base}
  const techspecs_base = "a8TD3mkN49fhg2y";

  // enter the page number to fetch results from
  const page = 1;

  // type in the name of the brand you're looking for or leave this field empty to see results from all brands
  const brand = ["Apple"];

  // type in the name of the category you're looking for or leave this field empty to see results from all categories
  const category = ["smartphone"];

  // please provide a date range to narrow your search. Leave this field empty to fetch all results from all dates
  const date = {
    from: "2010-01-01", // YYYY-MM-DD
    to: "2022-03-15", // YYYY-MM-DD
  };

  // choose between "pretty" or "raw" mode for viewing response
  const response = await techspecs.products(
    techspecs_base,
    brand,
    category,
    date,
    page,
    techspecs_key,
    "pretty"
  );

  // print the search results
  console.log(response);
}

```

### Product Details

```javascript
// Get the standardized specifications of a specified product

import { techspecs } from "techspecs";

// self invoking async function
async function getDetails() => {
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
}

```

### List all brands

```javascript
import { techspecs } from "techspecs";

// self invoking async function
async function getBrands() => {
  // TechSpecs API Key
  const techspecs_key = "techspecs_api_key";

  // TechSpecs base https://apis.dashboard.techspecs.io/{techspecs_base}
  const techspecs_base = "a8TD3mkN49fhg2y";

  // choose between "pretty" or "raw" mode for viewing response
  const response = await techspecs.brands(
    techspecs_base,
    techspecs_key,
    (mode = "pretty")
  );

  // print the list of all brands
  console.log(response);
}



```

### List all categories

```javascript
import { techspecs } from "techspecs";

// self invoking async function
async function getAllCategories() => {
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
}

```
