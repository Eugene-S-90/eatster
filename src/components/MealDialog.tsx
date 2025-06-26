import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

import { useEffect, useState } from "react"
import { useRestaurantStore } from '../store/useRestorauntStore'

export const MealDialog = () => {
  const { currentMeal, setCurrentMeal, addToCart } = useRestaurantStore()
  const [open, setOpen] = useState(false)

  const weight = currentMeal?.weight_double ?? currentMeal?.weight
  const ingredients = currentMeal?.ingredients?.trim()

  // Sync open state when currentMeal is set
  useEffect(() => {
    if (currentMeal) setOpen(true)
  }, [currentMeal])

  const handleOpenChange = (value: boolean) => {
    setOpen(value)
    if (!value) {
      // Delay clearing to allow close animation
      setTimeout(() => {
        setCurrentMeal(null)
      }, 200) // Match Dialog transition duration
    }
  }
  const AddTOCardHandler = () => {
    if (currentMeal) {
      addToCart(currentMeal)
      setOpen(false)
            setTimeout(() => {
        setCurrentMeal(null)
      }, 200) // Match Dialog transition duration
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl">{currentMeal?.name}</DialogTitle>
          <DialogDescription>
            Customize your meal or view more info
          </DialogDescription>
        </DialogHeader>

        {currentMeal?.picture_url && (
          <img
            src={currentMeal.picture_url}
            alt={currentMeal.name}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
        )}

        <p className="text-gray-500 mb-1">{weight}{currentMeal?.weight_unit}</p>
        {ingredients && (
          <p className="text-gray-400 mb-4">{ingredients}</p>
        )}

        <div className="flex justify-end">
          <button
            onClick={AddTOCardHandler}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2  font-semibold cursor-pointer">
            Add to card
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}