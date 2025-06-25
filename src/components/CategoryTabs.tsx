import { useRestaurantStore } from '../store/useRestorauntStore'
import { useMemo } from 'react'
import { Skeleton } from './Skeleton'

export const CategoryTabs = () => {
  const { meals, isMealsLoading } = useRestaurantStore()

  const categories = useMemo(() => {
    const map = new Map<string, { name: string; order: number }>()
    for (const meal of meals) {
      const category = meal.meal_category
      const key = `category-${category.id}`
      if (!map.has(key)) {
        map.set(key, { name: category.name, order: category.order })
      }
    }

    return Array.from(map.entries())
      .sort((a, b) => a[1].order - b[1].order)
      .map(([id, value]) => ({
        id,
        name: value.name,
      }))
  }, [meals])

  if (isMealsLoading) {
    return (
      <div className="flex gap-4 px-4 py-2 overflow-x-auto mt-2">
        {Array(6)
          .fill(0)
          .map((_, idx) => (
            <Skeleton key={idx} className="h-6 w-24" />
          ))}
      </div>
    )
  }

  return (
<div className="overflow-x-auto border-b sticky top-0 bg-white z-10 scrollbar-smart">
  <ul className="flex gap-4 px-4 py-2 whitespace-nowrap">
    {categories.map((category) => (
      <li key={category.id}>
        <a
          href={`#${category.id}`}
          className="text-sm font-medium hover:underline text-gray-800"
        >
          {category.name}
        </a>
      </li>
    ))}
  </ul>
</div>
  )
}