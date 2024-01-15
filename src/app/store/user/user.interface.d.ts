export interface UserAddressInterface {
  country: string
  state: string
  city: string
  address: string
}

export interface UserInterface {
  name: string
  dni: number
  email: string
  age: number
  address: UserAddressInterface
}