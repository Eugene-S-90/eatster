import type { Meal } from '../../types'
import { useRestaurantStore } from '../../store/useRestorauntStore'

type Props = {
  meal: Meal
}

export const MealCard = ({ meal }: Props) => {
  const weight = meal.weight_double ?? meal.weight
  const ingredients = meal.ingredients?.trim();

  const { setCurrentMeal, addToCart, removeFromCart, cart } = useRestaurantStore();

  // Find quantity in cart for this meal
  const cartItem = cart.find(item => item.meal.id === meal.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div
      className={`
        grid grid-cols-[5fr_1fr] gap-4
        p-4 border-b border-green-500
        bg-white transition-all duration-300
        hover:shadow-lg hover:-translate-y-1
      `}
    >
      <div className="flex h-full"
        onClick={() => setCurrentMeal?.(meal)}
      >
        {meal.picture_url && (
          <img
            src={meal.picture_url}
            alt={meal.name}
            className="w-25 h-25 object-cover rounded-lg cursor-pointer shadow-md hover:scale-105 transition-transform duration-300"
          />
        )}
        <div className="ml-4 flex flex-col justify-between">
          <h3 className="font-semibold text-lg">{meal.name}</h3>
          {weight && (
            <p className="text-gray-500 text-sm">{weight}{meal.weight_unit}</p>
          )}
          {ingredients && (
            <p className="text-gray-400 text-sm mt-1">{ingredients}</p>
          )}
        </div>
      </div>

  <div className="flex flex-col justify-between items-center h-full">
        <p className="font-bold text-lg text-black">{meal?.price}€</p>
        {quantity === 0 ? (
          <button
            className="bg-green-600 text-white px-4 py-2  font-bold cursor-pointer mt-2"
            onClick={() => addToCart(meal)}
          >
            Add
          </button>
        ) : (
          <div className="flex items-center gap-1 mt-2">
            <button
              className="bg-green-100 text-green-700 px-2 py-1 rounded font-bold cursor-pointer"
              onClick={() => removeFromCart(meal)}
              disabled={quantity === 0}
            >−</button>
            <span className="mx-2 min-w-[12px] text-center">{quantity}</span>
            <button
              className="bg-green-600 text-white px-2 py-1 rounded font-bold cursor-pointer"
              onClick={() => addToCart(meal)}
            >+</button>
          </div>
        )}
      </div>
    </div>
  )
}