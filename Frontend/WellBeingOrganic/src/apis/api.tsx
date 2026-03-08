import axios from "axios";

const API_BASE_URL = "https://wellbeingorganic.org/api/2026-01/graphql.json";

const headers = {
  "Content-Type": "application/json",
  "X-Shopify-Storefront-Access-Token": "9313b628a4a99d775ea3f9b440104806",
};


// ================= PRODUCTS =================
export const products = async () => {

  const query = {
    query: `
      {
        products(first: 10) {
          edges {
            node {
              id
              title
              images(first: 2) {
                edges {
                  node {
                    url
                  }
                }
              }
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    `
  };

  const res = await axios.post(API_BASE_URL, query, { headers });

  return res.data;
};


// ================= COLLECTIONS =================
export const collections = async () => {

  const query = {
    query: `
      {
        collections(first: 5) {
          edges {
            node {
              id
              title
              image {
                url
                altText
                width
                height
              }
            }
          }
        }
      }
    `
  };

  const res = await axios.post(API_BASE_URL, query, { headers });

  console.log("Collections API Response:", res.data);

  return res.data;
};


// ================= HERO BANNER =================
export const banner = async () => {

  const query = {
    query: `
      {
        metaobjects(type: "hero_banner", first: 10) {
          edges {
            node {
              id
              handle
              fields {
                key
                value
                reference {
                  ... on MediaImage {
                    image {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  };

  const res = await axios.post(API_BASE_URL, query, { headers });

  console.log("Banner API Response:", res.data);

  return res.data;
};