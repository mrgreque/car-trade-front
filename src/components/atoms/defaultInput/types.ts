export type DefaultInputProps = {
  setDefaultInput: React.Dispatch<React.SetStateAction<any>>,
  inputValue: string | number,
  label: string,
  size?: "small" | "medium",
  variant?: "outlined" | "filled",
  flex?: number,
  type?: string,
  multiline?: boolean,
  rows?: number,
}
