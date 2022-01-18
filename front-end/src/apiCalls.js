const baseUrl = "http://localhost:4000/graphql";
const headers = {
  "Content-Type": "application/json",
};

export const getAllProducts = async () => {
  let graphql = JSON.stringify({
    query: "{  allProducts{id, name, product}}",
  });
  var requestOptions = {
    method: "POST",
    headers: headers,
    body: graphql,
    redirect: "follow",
  };

  let result = await fetch(
    "http://localhost:4000/graphql",
    requestOptions
  ).catch((error) => console.error("error", error));

  let json = result.json();
  return json;
};

export const getAllStates = async () => {
  let graphql = JSON.stringify({
    query: "{  allStates{id, name, abbreviation}}",
  });
  var requestOptions = {
    method: "POST",
    headers: headers,
    body: graphql,
    redirect: "follow",
  };

  let result = await fetch(
    "http://localhost:4000/graphql",
    requestOptions
  ).catch((error) => console.error("error", error));

  let json = result.json();
  return json;
};

export const getProviders = async (product, state) => {
  let graphql = JSON.stringify({
    query: ` query  getAllPoviders($product: String!, $state: String!) {
                  providersByProductAndState(product: $product , state: $state) {
                  id
                  name
                  product
                  state
              }
            }`,
    variables: {
      product,
      state,
    },
  });
  var requestOptions = {
    method: "POST",
    headers: headers,
    body: graphql,
    redirect: "follow",
  };

  let result = await fetch(
    "http://localhost:4000/graphql",
    requestOptions
  ).catch((error) => console.error("error", error));

  let json = result.json();
  return json;
};

export const getProvidersByProductAndState = async (product, state) => {
  let graphql = JSON.stringify({
    query: ` query  allPoviders($product: String!, $state: String!) {
                  allProviders(product: $product , state: $state) {
                  name
              }
            }`,
    variables: {
      product,
      state,
    },
  });
  var requestOptions = {
    method: "POST",
    headers: headers,
    body: graphql,
    redirect: "follow",
  };

  let result = await fetch(
    "http://localhost:4000/graphql",
    requestOptions
  ).catch((error) => console.error("error", error));

  let json = result.json();
  return json;
};
