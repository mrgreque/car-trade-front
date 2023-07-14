export type OrdeningProps = {
  handleOrdening: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  ordening: string,
  size?: "small" | "medium",
}
