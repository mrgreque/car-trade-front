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
  city: string,
  state: string,
  year: number,
  modelYear: number,
  km: number,
  transmission: string,
  fuel: string,
  color: string,
  paidIpva: boolean,
  paidLicensing: boolean,
  price: number,
  oldPrice?: number,
  principalImage: string,
  images?: string[],
  motorPower: string,
  ports: number,
  description: string,
}
