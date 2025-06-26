import { useEffect, useRef } from 'react'
import { useRestaurantStore } from './store/useRestorauntStore'
import { Header } from './components/Header'
import { CategoryTabs } from './components/CategoryTabs'
import { CategorySection } from './components/CategorySection'
import RestarauntLayout from './layout/RestarauntLayout'
import ScrollUpButton from './components/ScrollUpButton'
import { MealDialog } from './components/MealDialog'
import { CartBar } from './components/CartBar'

function App() {
  const { fetchMeals } = useRestaurantStore();
  const fetched = useRef(false)

  useEffect(() => {
    if (fetched.current) return
    fetched.current = true
    fetchMeals(287);
  }, [fetchMeals])

  return (
    <RestarauntLayout>
      <Header />
      <CategoryTabs />
      <CategorySection />
      <MealDialog />
      <ScrollUpButton />
      <CartBar />
    </RestarauntLayout>
  )
}

export default App