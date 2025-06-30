import { useRestaurantStore } from '../../store/useRestaurantStore'
import { useMemo } from 'react'
import { ProductCard } from '../product/ProductCard'
import { Skeleton } from '../Skeleton'
import { groupProductsByCategory } from '../../lib/utils'


export const CategorySection = () => {
  const { products, isProductsLoading } = useRestaurantStore();

  const categories = useMemo(() => {
    return groupProductsByCategory(products)
  }, [products])

  if (isProductsLoading) {
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
      {categories.map(({ id, name, products }) => (
        <section key={id} id={id} className="mb-8 scroll-mt-24">
          <h2 className="text-2xl font-bold mb-4">{name}</h2>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      ))}
    </section>
  )
}