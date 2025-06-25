import { useEffect, useRef, useState } from 'react'
import { useRestaurantStore } from './store/useRestorauntStore'
import { Header } from './components/Header'
import { CategoryTabs } from './components/CategoryTabs'
import { CategorySection } from './components/CategorySection'
import RestarauntLayout from './layout/RestarauntLayout'
import ScrollUpButton from './components/ScrollUpButton'
import { MealModal } from './components/MealModal'
import type { Meal } from './types'

function App() {
  const { isMealsLoading, restaurant, fetchData, fetchRestaurant } = useRestaurantStore();
  const fetched = useRef(false)
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null)

  useEffect(() => {
    if (fetched.current) return
    fetched.current = true
    fetchData(287);
    fetchRestaurant(287)
  }, [fetchData, fetchRestaurant])

  return (
    <RestarauntLayout>
      {/* {isLoading && <SkeletonPage />} */}
      <Header />
      <div>
        <CategoryTabs />
        <div className="p-4">
          <CategorySection onMealImageClick={setSelectedMeal} />
        </div>
      </div>

      {selectedMeal && (
        <MealModal meal={selectedMeal} onClose={() => setSelectedMeal(null)} />
      )}
      <ScrollUpButton />
    </RestarauntLayout>
  )
}

export default App