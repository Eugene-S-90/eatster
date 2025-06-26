import { useEffect, useRef } from 'react'
import { useRestaurantStore } from '../store/useRestorauntStore'
import { Skeleton } from './Skeleton'

export const Header = () => {
  const { restaurant, isRestaurantLoading, fetchRestaurant } = useRestaurantStore()
  const fetched = useRef(false)

  useEffect(() => {
    if (fetched.current) return
    fetched.current = true
    fetchRestaurant(287)
  }, [fetchRestaurant])

  if (isRestaurantLoading) {
    return (
      <div>
        <Skeleton className="w-full h-64" />
      </div>
    )
  }

  return (
    <div
      className="relative w-full h-64 bg-cover bg-center"
      style={{ backgroundImage: `url(${restaurant?.picture_url_large})` }}
    >
      <div className="bg-white px-4 py-2 flex items-center justify-center">
        <img
          src={restaurant?.logo_url}
          alt="logo"
          className="w-12 h-12 object-contain"
        />
        <h1 className="text-3xl font-bold text-center ml-6">{restaurant?.name}</h1>
      </div>
    </div>
  )
}