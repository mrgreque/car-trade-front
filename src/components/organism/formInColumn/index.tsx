import { InColumnForm } from "./styled"
import { FormInColumnProps } from "./types"

const FormInColumn = (props: FormInColumnProps) => {
  return (
    <InColumnForm width={props.width}>
      {props.children}
    </InColumnForm>
  )
}

export default FormInColumn;
