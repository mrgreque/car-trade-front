import { ButtonWithIconProps } from "./types";
import { StyledButtonWithIcon } from "./styled";
import { Spacer } from "../../global/styled";

const ButtonWithIcon = (props: ButtonWithIconProps) => {
  return (
    <>
      <StyledButtonWithIcon
        onClick={props.onClick}
        disabled={props.disabled}
        color={props.color ?? "primary"}
      >
        {props.icon}
        <Spacer width="5px" height="0" />
        {props.children}
      </StyledButtonWithIcon>
    </>

  );
}

export default ButtonWithIcon;
