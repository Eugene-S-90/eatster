import { useEffect, useRef } from 'react'
import { useRestaurantStore } from '../../store/useRestaurantStore'
import { Skeleton } from '../Skeleton'
import { queryParamsParser } from '../../lib/utils'
import { LangSelect } from '../LangSelect'




export const Header = () => {
  const { restaurant, isRestaurantLoading, fetchRestaurant } = useRestaurantStore()
  const fetched = useRef(false)


  useEffect(() => {
    if (fetched.current) return
    fetched.current = true;

    const id = queryParamsParser('id')
    if (id) {
      fetchRestaurant(+id)
    } else {
      fetchRestaurant(287)
    }

  }, [fetchRestaurant])

  if (isRestaurantLoading) {
    return (
      <div>
        <Skeleton className="w-full h-64" />
      </div>
    )
  }

  return (
    <section
      className="relative w-full h-64 bg-cover bg-center"
      style={{ backgroundImage: `url(${restaurant?.picture_url_large})` }}
    >
      <div className="bg-white px-4 py-2 flex items-center ">
        <img
          src={restaurant?.logo_url}
          alt="logo"
          className="w-12 h-12 object-contain"
        />
        <div className='flex items-center justify-between w-full'>
          <h1 className="text-3xl font-bold text-center ml-4 pl-5 border-l-1 max-w-[80%]">{restaurant?.name}</h1>
          <LangSelect />
        </div>

      </div>
    </section>
  )
}