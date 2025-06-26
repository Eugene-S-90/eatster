
export type Restaurant = {
  status?: string
  errors?: { message?: string, status?: number },
  id: number
  name: string
  picture_url_large: string
  logo_url: string
  available_languages: string[]
}

export type Meal = {
  id: number
  name: string
  price_with_modifiers: number,
  price: number,
  weight?: string
  weight_double?: number
  weight_unit?: string
  ingredients?: string
  picture_url?: string
  meal_category: {
    id: number
    name: string
    order: number
  }
}