
import { Header } from './components/restaurant/Header'
import { RestaurantContentWrapper } from './components/restaurant/RestaurantContentWrapper'
import RestaurantLayout from './layouts/RestaurantLayout'
import ScrollUpButton from './components/ScrollUpButton'
import { MealDialog } from './components/meals/MealDialog'
import { CartBar } from './components/CartBar'

function App() {
  return (
    <RestaurantLayout>
      <Header />
      <RestaurantContentWrapper />
      <MealDialog />
      <ScrollUpButton />
      <CartBar />
    </RestaurantLayout>
  )
}

export default App