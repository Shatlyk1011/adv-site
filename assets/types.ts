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
