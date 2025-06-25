import { useEffect, useRef } from 'react'
import { useRestaurantStore } from '../store/useRestorauntStore'

import { Skeleton } from './Skeleton'


export const Header = () => {

  const { restaurant, isRestaurantLoading, fetchRestaurant } = useRestaurantStore()

  const fetched = useRef(false);


  useEffect(() => {
    if (fetched.current) return
    fetched.current = true
    fetchRestaurant(287)
  }, [fetchRestaurant])

  if (isRestaurantLoading) {
    return <div>
      <Skeleton className="w-full h-64" />
    </div>
  }

  return (
    <div className="relative">
      <img
        src={restaurant?.picture_url_large}
        alt="Header"
        className="w-full h-64 object-cover"
      />
      <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded shadow flex items-center gap-4">
        <img src={restaurant?.logo_url} alt="logo" className="w-12 h-12 object-contain" />
        <h1 className="text-xl font-bold">{restaurant?.name}</h1>
      </div>
    </div>
  )
}