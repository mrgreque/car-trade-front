export type Props = {
  children?: React.ReactNode,
  className?: string,
  image: string,
}

export type CarProps = {
  id: string,
  name: string,
  brand: string,
  model: string,
  year: number,
  image: string,
  price: number,
  oldPrice?: number,
  km: number,
}
