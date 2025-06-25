import { useRestaurantStore } from '../store/useRestorauntStore'
import { useMemo } from 'react'
import { MealCard } from './MealCard'
import { Skeleton } from './Skeleton'
import type { Meal } from '../types'

type Props = {
  onMealImageClick: (meal: Meal) => void
}

export const CategorySection = ({ onMealImageClick }: Props) => {
  const { meals, isMealsLoading } = useRestaurantStore();

  const grouped = useMemo(() => {
    const map = new Map<string, { name: string; order: number; meals: typeof meals }>()
    for (const meal of meals) {
      const category = meal.meal_category
      const key = `category-${category.id}`
      if (!map.has(key)) {
        map.set(key, { name: category.name, order: category.order, meals: [] })
      }
      map.get(key)!.meals.push(meal)
    }

    return Array.from(map.entries())
      .sort((a, b) => a[1].order - b[1].order)
      .map(([id, value]) => ({
        id,
        name: value.name,
        meals: value.meals,
      }))
  }, [meals])

  if (isMealsLoading) {
    return (
      <div className="p-4 space-y-6">
        {Array(2)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="w-1/3 h-6" />
              <Skeleton className="w-full h-20" />
              <Skeleton className="w-full h-20" />
            </div>
          ))}
      </div>
    )
  }


  return (
    <>
      {grouped.map(({ id, name, meals }) => (
        <section key={id} id={id} className="mb-8 scroll-mt-24">
          <h2 className="text-2xl font-bold mb-4">{name}</h2>
          {meals.map((meal) => (
            <MealCard key={meal.id} meal={meal} onImageClick={onMealImageClick} />
          ))}
        </section>
      ))}
    </>
  )
}