import { Button } from "@mui/material";
import { ButtonWithIconProps } from "./types";

const ButtonWithIcon = (props: ButtonWithIconProps) => {
  return (
    <>
      <Button
        variant="contained"
        startIcon={props.icon}
        onClick={() => props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </Button>
    </>

  );
}

export default ButtonWithIcon;
