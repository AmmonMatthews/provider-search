import React from "react";
import { styled, Autocomplete, TextField } from "@mui/material";

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

const CustomAutoComplete = styled(Autocomplete)({
  "& .MuiChip-root": {
    backgroundColor: "rgba(0, 0, 0, 0.08)",
    borderRadius: "16px",
  },
  width: "100%",
  marginLeft: "50%",
});

const StateAutoComplete = ({ allStates, currentState, handleStateChange }) => {
  return (
    <CustomAutoComplete
      size="small"
      freeSolo
      // value={currentState.name}
      options={allStates}
      onChange={(e, newInputValue) => {
        handleStateChange(newInputValue);
      }}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <CustomTextField
          variant="outlined"
          margin="normal"
          {...params}
          label="State"
        />
      )}
    />
  );
};

export default StateAutoComplete;
