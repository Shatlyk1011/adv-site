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

export type Images = {
  urls: IAdvImage[]
  storageFolderPath: string
}

export interface IAdvertisement {
  title: string
  category: string
  subCategory: string
  condition: boolean
  advType: boolean
  createdAt: Timestamp
  description: string
  price: string | number
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
    addressNumber: string | number
  }

  userInfo: {
    readonly uid: string | number
    userName: string
    phone: string | number
    geolocation?: string
  }
}
