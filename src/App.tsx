import { useEffect, useRef } from 'react'
import { useRestaurantStore } from './store/useRestorauntStore'
import { Header } from './components/restaurant/Header'
import { CategoryTabs } from './components/restaurant/CategoryTabs'
import { CategorySection } from './components/restaurant/CategorySection'
import RestarauntLayout from './layouts/RestarauntLayout'
import ScrollUpButton from './components/ScrollUpButton'
import { MealDialog } from './components/meals/MealDialog'
import { CartBar } from './components/CartBar'
import { queryParamsParser } from './lib/utils'
import NotFound from './layouts/NotFound'

function App() {
  const { fetchMeals, restaurantError } = useRestaurantStore();
  const fetched = useRef(false)

  useEffect(() => {
    if (fetched.current) return
    fetched.current = true;
    const id = queryParamsParser('id')
    if (id) {
      fetchMeals(+id);
    } else {
      fetchMeals(287);
    }
  }, [fetchMeals]);

  if (restaurantError) {
    return <NotFound restaurantError={restaurantError} />
  }

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