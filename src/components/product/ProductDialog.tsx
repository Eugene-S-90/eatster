import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

import { useEffect, useState } from "react"
import { useRestaurantStore } from '../../store/useRestaurantStore'
import { useCartStore } from '../../store/useCartStore'

export const ProductDialog = () => {
  const { currentProduct, setCurrentProduct, } = useRestaurantStore();
  const { addToCart } = useCartStore();
  const [open, setOpen] = useState(false)

  const weight = currentProduct?.weight_double ?? currentProduct?.weight
  const ingredients = currentProduct?.ingredients?.trim()

  useEffect(() => {
    if (currentProduct) setOpen(true)
  }, [currentProduct])

  const handleOpenChange = (value: boolean) => {
    setOpen(value)
    if (!value) {
      setTimeout(() => {
        setCurrentProduct(null)
      }, 200)
    }
  }
  const AddTOCardHandler = () => {
    if (currentProduct) {
      addToCart(currentProduct)
      setOpen(false)
      setTimeout(() => {
        setCurrentProduct(null)
      }, 200)
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl">{currentProduct?.name}</DialogTitle>
          <DialogDescription>
            Customize your product or view more info
          </DialogDescription>
        </DialogHeader>

        {currentProduct?.picture_url && (
          <div className="relative">

            <img
              src={currentProduct.picture_url}
              alt={currentProduct.name}
              className="w-full h-48 object-cover rounded-md  mb-4"
            />
          </div>

        )}

        <p className="text-gray-500 mb-1">{weight}{currentProduct?.weight_unit}</p>
        {ingredients && (
          <p className="text-gray-400 mb-1">{ingredients}</p>
        )}

        <div className="w-full">
          <p className="text-center bg-white p-2 right-5 top-[0px] font-bold text-lg text-black">{currentProduct?.price}€</p>
          <button
            onClick={AddTOCardHandler}
            className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2  font-semibold cursor-pointer">
            Add to card
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}