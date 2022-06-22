import { FormControl, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { InputFieldProps } from "../../interfaces/props";

const InputField = (props: InputFieldProps) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      defaultValue=""
      rules={{ required: true }}
      render={({ field }) => (
        <FormControl>
          <TextField
            label={props.label}
            type={props.type}
            variant={"outlined"}
            margin={"dense"}
            {...field}
          />
        </FormControl>
      )}
    />
  );
};

export default InputField;
