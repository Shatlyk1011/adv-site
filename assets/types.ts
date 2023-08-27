import { Timestamp } from "firebase/firestore"

export interface ICategory {
  id: number | string
  title: string
  imgUrl: string
  subCategories: string[]
}

export interface IProductCondition {
  name: string
  value: string
  label: string
}

export interface IRegion {
  readonly id: number | string
  title: string
  cities: string[]
}

export interface IImage {
  file: File
  url: string
}

export interface IAdvImage {
  url: string
  storagePath: string
}

export type TImages = {
  urls: IAdvImage[]
  storageFolderPath: string
}

export type TUserInfo = {
  readonly uid: string | number
  userName: string
  phone: string | number
  registeredAt: string
  geolocation?: string
}

export interface IAdvertisement {
  readonly id?: string | number
  title: string
  category: string
  subCategory: string
  condition: boolean
  advType: boolean
  createdAt: Timestamp
  description: string
  price: string
  currency: string
  delivery: boolean
  communication: boolean

  images: {
    urls: IAdvImage[]
    storageFolderPath: string
  } | null

  appointment: {
    region: string
    city: string
    address: string
    addressNumber?: string | number
  }
  userInfo: TUserInfo
}
