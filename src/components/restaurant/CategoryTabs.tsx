import { useRestaurantStore } from '../../store/useRestaurantStore'
import { useMemo, useEffect, useState, useRef } from 'react'
import { Skeleton } from '../Skeleton'
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import clsx from 'clsx'
import { groupProductsByCategory } from '../../lib/utils'

export const CategoryTabs = () => {
  const { products, isProductsLoading } = useRestaurantStore()
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const tabRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({})

  const categories = useMemo(() => {
    return groupProductsByCategory(products)
  }, [products])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const newId = entry.target.id
            setActiveCategory(prev => {
              if (prev !== newId) {
                return newId
              }
              return prev
            })
          }
        })
      },
      {
        rootMargin: '0px 0px -60% 0px', // triggers early
        threshold: 0.2,
      }
    )

    categories.forEach(category => {
      const section = document.getElementById(category.id)
      if (section) observer.observe(section)
    })

    return () => {
      categories.forEach(category => {
        const section = document.getElementById(category.id)
        if (section) observer.unobserve(section)
      })
    }
  }, [categories])

  useEffect(() => {
    if (activeCategory && tabRefs.current[activeCategory]) {
      tabRefs.current[activeCategory]!.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      })
    }
  }, [activeCategory])

  if (isProductsLoading) {
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
    <section className='overflow-x-auto border-b sticky top-0 bg-white z-10 drop-shadow-md'>
      <ScrollArea className="w-[90%] h-13 mx-auto">
        <ul className="flex gap-4 px-4 py-2 whitespace-nowrap mt-[5px]">
          {categories.map((category) => (
            <li key={category.id}>
              <a
                href={`#${category.id}`}
                ref={el => { tabRefs.current[category.id] = el; }}
                className={clsx(
                  "text-md font-medium hover:underline",
                  activeCategory === category.id
                    ? "text-green-600 underline"
                    : "text-grey-800"
                )}
              >
                {category.name}
              </a>
            </li>
          ))}
        </ul>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  )
}