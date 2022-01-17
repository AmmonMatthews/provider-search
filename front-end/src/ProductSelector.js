import React from "react";
import { styled, TextField, MenuItem } from "@mui/material";

const CustomTextField = styled(TextField)(() => ({
  "& .MuiSelect-select:focus": {
    backgroundColor: "#EBEDF2",
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "#939598",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#EBEDF2",
    },
  },
  width: "50%",
}));

const ProductSelector = ({
  allProducts,
  currentProduct,
  handleProductChange,
}) => {
  return (
    <CustomTextField
      fullWidth
      margin="normal"
      label="Product"
      value={currentProduct}
      onChange={handleProductChange}
      variant="outlined"
      select
      size="small"
    >
      {allProducts.map((menuItem) => [
        <MenuItem key={menuItem.name} value={menuItem.name}>
          {menuItem.name.toUpperCase()}
        </MenuItem>,
      ])}
    </CustomTextField>
  );
};

export default ProductSelector;
