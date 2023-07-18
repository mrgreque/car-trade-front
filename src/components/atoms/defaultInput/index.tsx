import { DefaultInputProps } from "./types";
import { StyledTextField } from "./styled";

const DefaultInput = (props: DefaultInputProps) => {
  return (
    <>
      <StyledTextField
        size={props.size ?? 'small'}
        label={props.label}
        variant={props.variant ?? 'outlined'}
        value={props.inputValue}
        onChange={(e) => props.setDefaultInput(e.target.value)}
        flex={props.flex ?? 1}
        type={props.type ?? 'text'}
        multiline={props.multiline ?? false}
        rows={props.rows ?? 1}
      />
    </>
  )
}

export default DefaultInput;
