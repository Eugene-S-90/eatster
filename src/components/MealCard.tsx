import type { Meal } from '../types'

type Props = {
  meal: Meal
  onImageClick?: (meal: Meal) => void
}

export const MealCard = ({ meal, onImageClick }: Props) => {
  const weight = meal.weight_double ?? meal.weight
  const ingredients = meal.ingredients?.trim()

  return (
    <div className="flex justify-between items-start py-4 border-b">
      <div>
        <h3 className="font-semibold text-lg">{meal.name}</h3>
        {weight && (
          <p className="text-gray-500 text-sm">{weight}{meal.weight_unit}</p>
        )}
        {ingredients && (
          <p className="text-gray-400 text-sm">{ingredients}</p>
        )}
        <p className="mt-2 font-bold text-lg text-black">
          {/* {meal?.price_with_modifiers?.toFixed(2)}€ */}
        </p>
      </div>
      {meal.picture_url && (
        <img
          src={meal.picture_url}
          alt={meal.name}
          className="w-20 h-20 object-cover rounded-lg cursor-pointer"
          onClick={() => onImageClick?.(meal)}
        />
      )}
    </div>
  )
}