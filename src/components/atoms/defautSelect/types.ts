type ValueOptions = {
  value: any,
  label: string,
}

export type DefaultSelectProps = {
  setDefaultInput: React.Dispatch<React.SetStateAction<any>>,
  inputValue: any,
  valueOptions: ValueOptions[],
  label: string ,
  size?: "small" | "medium",
  variant?: "outlined" | "filled",
  flex?: number,
  width?: string,
}
