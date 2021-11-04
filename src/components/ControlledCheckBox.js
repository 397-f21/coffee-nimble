import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { setData } from "../Utilities/firebase";
//mock ^ module 
export default function ControlledCheckbox({ isChecked, index }) {
  const [checked, setChecked] = React.useState(isChecked);

  const handleChange = async (event) => {
    
    setChecked(event.target.checked);
    try {
      await setData('/tasks/' + index + '/completed', event.target.checked )
    } catch (error) {
      alert(error);
    }
  };

  

  return (
    <Checkbox
      data-testid= "checkbox"
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}
