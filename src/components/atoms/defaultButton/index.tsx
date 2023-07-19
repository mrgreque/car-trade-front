import { StyledButton } from "./styled"
import { DefaultButtonProps } from "./types"

const DefaultButton = (props: DefaultButtonProps) => {
  return (
    <>
      <StyledButton
        onClick={props.onClick}
        width={props.width}
        height={props.height}
        disabled={props.disabled ?? false}
        color={props.color}
      >
        {props.children}
      </StyledButton>
    </>
  )
}

export default DefaultButton
