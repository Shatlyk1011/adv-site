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

export interface IAdvertisement {
  title: string
  category: string
  subCategory: string
  condition: boolean
  advType: boolean
  createdAt: string

  images: {
    urls: [{ url: string; storagePath: string }]
    storageFolderPath: string
  }

  appointment: {
    region: string
    city: string
    address: string
    addressNumber: string | number
  }

  userInfo: {
    readonly uid: string | number
    name: string
    phone: string | number
    geolocation?: string
  }
}