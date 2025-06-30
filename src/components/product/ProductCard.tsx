import type { Product } from '../../types'
import { useRestaurantStore } from '../../store/useRestorauntStore'

type Props = {
  product: Product
}

export const ProductCard = ({ product }: Props) => {
  const weight = product.weight_double ?? product.weight
  const ingredients = product.ingredients?.trim();

  const { setCurrentProduct, addToCart, removeFromCart, cart } = useRestaurantStore();

  const cartItem = cart.find(item => item.product.id === product.id);
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
        onClick={() => setCurrentProduct?.(product)}
      >
        {product.picture_url && (
          <img
            src={product.picture_url}
            alt={product.name}
            className="w-25 h-25 object-cover rounded-lg cursor-pointer shadow-md hover:scale-105 transition-transform duration-300"
          />
        )}
        <div className="ml-4 flex flex-col justify-between">
          <h3 className="font-semibold text-lg">{product.name}</h3>
          {weight && (
            <p className="text-gray-500 text-sm">{weight}{product.weight_unit}</p>
          )}
          {ingredients && (
            <p className="text-gray-400 text-sm mt-1">{ingredients}</p>
          )}
        </div>
      </div>

  <div className="flex flex-col justify-between items-center h-full">
        <p className="font-bold text-lg text-black">{product?.price}€</p>
        {quantity === 0 ? (
          <button
            className="bg-green-600 text-white px-4 py-2  font-bold cursor-pointer mt-2"
            onClick={() => addToCart(product)}
          >
            Add
          </button>
        ) : (
          <div className="flex items-center gap-1 mt-2">
            <button
              className="bg-green-100 text-green-700 px-2 py-1 rounded font-bold cursor-pointer"
              onClick={() => removeFromCart(product)}
              disabled={quantity === 0}
            >−</button>
            <span className="mx-2 min-w-[12px] text-center">{quantity}</span>
            <button
              className="bg-green-600 text-white px-2 py-1 rounded font-bold cursor-pointer"
              onClick={() => addToCart(product)}
            >+</button>
          </div>
        )}
      </div>
    </div>
  )
}