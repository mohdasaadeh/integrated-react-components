import TextField from "@mui/material/TextField";
import AutocompleteMui from "@mui/material/Autocomplete";

type AutocompleteOption = { value: keyof any; label: string };

interface AutocompleteProps {
  id: string;
  options: AutocompleteOption[];
  selectedOption?: AutocompleteOption;
  label?: string;
  color?: string;
  sxStyle?: { [key: string]: string | number };
}

export const Autocomplete = ({
  id,
  options,
  selectedOption,
  label,
  color = "#1890ff",
  sxStyle = { width: 300 },
}: AutocompleteProps) => {
  return (
    <AutocompleteMui
      disablePortal
      id={id}
      options={options}
      value={selectedOption}
      sx={{
        "&.MuiAutocomplete-root": {
          height: "100%",
        },
        "&.MuiAutocomplete-root .MuiFormControl-root": {
          height: "100%",
        },
        "&.MuiAutocomplete-root .MuiFormControl-root .MuiInputBase-root": {
          height: "100%",
          paddingTop: 0,
          paddingBottom: 0,
        },
        "&.MuiAutocomplete-root .MuiInputLabel-root": {
          transition: "all 0.2s ease-out",
        },
        "&.MuiAutocomplete-root .MuiInputLabel-root:not(.MuiInputLabel-shrink)":
          {
            top: "50%",
            transform: "translateY(-50%)",
            left: "10px",
          },
        "&.MuiAutocomplete-root .MuiInputLabel-root.Mui-focused": {
          color,
        },
        "&.MuiAutocomplete-root .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            borderColor: color,
          },
        ...sxStyle,
      }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};
