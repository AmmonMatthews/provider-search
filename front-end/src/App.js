import React, { useEffect, useState } from "react";
import { styled, Typography, Button } from "@mui/material";
import { getAllStates, getAllProducts, getProviders } from "./apiCalls";
import StateAutoComplete from "./StateAutoComplete";
import ProductSelector from "./ProductSelector";

const CustomContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  width: "90%",
  margin: "10% auto",
}));

const CustomTitle = styled(Typography)(() => ({
  fontSize: 29,
  color: "#713FFA",
}));

const CustomProvidersContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  // flexWrap: "wrap",
  width: "100%",
  // margin: "auto",
  alignItems: "center",
  justifyContent: "center",
}));

const CustomProviderCard = styled("div")(() => ({
  padding: "1%",
  marginBottom: "1%",
  width: "30%",
  border: "1px solid #713FFA",
  borderRadius: "4px",
}));

const CustomProviderTitle = styled(Typography)(() => ({
  textAlign: "center",
}));

function App() {
  const [allStates, setAllStates] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState("auto");
  const [currentState, setCurrentState] = useState("");
  const [allProviders, setAllProviders] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let fetchStates = await getAllStates();
      let fetchProducts = await getAllProducts();

      if (fetchStates.data.allStates.length > 0) {
        setAllStates(fetchStates.data.allStates);
      }

      if (fetchProducts.data.allProducts.length > 0) {
        setAllProducts(fetchProducts.data.allProducts);
      }
    };

    fetchData();
    return () => {
      setAllStates([]);
      setAllProducts([]);
    };
  }, []);

  const handleProductChange = (event) => {
    setCurrentProduct(event.target.value);
  };

  const handleStateChange = (value) => {
    setCurrentState(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentProduct && currentState.abbreviation) {
      let fetchProviders = await getProviders(
        currentProduct,
        currentState.abbreviation
      );

      if (fetchProviders.data.providersByProductAndState.length) {
        setAllProviders(fetchProviders.data.providersByProductAndState);
      }
    }
  };

  return (
    <>
      <CustomContainer>
        <div className="header">
          <CustomTitle>Find A Provider</CustomTitle>
        </div>
        <ProductSelector
          allProducts={allProducts}
          currentProduct={currentProduct}
          handleProductChange={handleProductChange}
        />
        <StateAutoComplete
          allStates={allStates}
          handleStateChange={handleStateChange}
          currentState={currentState}
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </CustomContainer>
      {allProviders.length > 0 ? (
        <CustomProvidersContainer>
          {allProviders.map((provider) => {
            return (
              <CustomProviderCard key={provider.id}>
                <CustomProviderTitle>{provider.name}</CustomProviderTitle>
              </CustomProviderCard>
            );
          })}
        </CustomProvidersContainer>
      ) : null}
    </>
  );
}

export default App;
