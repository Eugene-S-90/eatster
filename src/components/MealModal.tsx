import type { Meal } from '../types'

type Props = {
  meal: Meal
  onClose: () => void
}

export const MealModal = ({ meal, onClose }: Props) => (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
      <button
        className="absolute top-2 right-2 text-2xl"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>
      {meal.picture_url && (
        <img src={meal.picture_url} alt={meal.name} className="w-full h-48 object-cover rounded mb-4" />
      )}
      <h2 className="text-xl font-bold mb-2">{meal.name}</h2>
      <p className="text-gray-500 mb-2">{meal.weight_double ?? meal.weight}{meal.weight_unit}</p>
      <p className="text-gray-400 mb-4">{meal.ingredients}</p>
      <div className="flex justify-between items-center">
        {/* <span className="font-bold text-lg">{meal.price_with_modifiers.toFixed(2)}€</span> */}
        <button className="bg-green-600 text-white px-4 py-2 rounded font-semibold">
          Add & Customize
        </button>
      </div>
    </div>
  </div>
)