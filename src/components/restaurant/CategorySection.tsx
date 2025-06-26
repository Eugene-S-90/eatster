import { useRestaurantStore } from '../../store/useRestorauntStore'
import { useMemo } from 'react'
import { MealCard } from '../meals/MealCard'
import { Skeleton } from '../Skeleton'
import { groupMealsByCategory } from '../../lib/utils'


export const CategorySection = () => {
  const { meals, isMealsLoading } = useRestaurantStore();

  const grouped = useMemo(() => {
    return groupMealsByCategory(meals)
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
    <section className="p-4">
      {grouped.map(({ id, name, meals }) => (
        <section key={id} id={id} className="mb-8 scroll-mt-24">
          <h2 className="text-2xl font-bold mb-4">{name}</h2>
          {meals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </section>
      ))}
    </section>
  )
}