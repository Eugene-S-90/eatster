import { useRestaurantStore } from '../store/useRestorauntStore'

export const CartBar = () => {
    const cart = useRestaurantStore((state) => state.cart)
    const total = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)

    if (cart.length === 0) return null

    return (
        <div className="
        max-w-4xl mx-auto 
        fixed left-0 right-0 bottom-2 z-50
        flex justify-center
        transition-transform duration-300
        animate-slideup
        cursor-pointer
      "
        >
            <button
                onClick={() => alert('Payment logic here')}
                className="bg-green-600 text-white font-bold text-md w-[60%] px-8 py-4 shadow-lg mb-0 cursor-pointer" >

                Payment&nbsp;&nbsp;{total.toFixed(2)} €
            </button>
        </div>
    )
}
