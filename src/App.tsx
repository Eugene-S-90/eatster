
import { Header } from './components/restaurant/Header'
import { RestaurantContentWrapper } from './components/restaurant/RestaurantContentWrapper'
import RestaurantLayout from './layouts/RestaurantLayout'
import ScrollUpButton from './components/ScrollUpButton'
import { MealDialog } from './components/meals/MealDialog'
import { CartBar } from './components/CartBar'
import { Loader } from './components/Loader'

function App() {
  return (
    <RestaurantLayout>
      <Header />
      <RestaurantContentWrapper />
      <MealDialog />
      <ScrollUpButton />
      <CartBar />
      <Loader />
    </RestaurantLayout>
  )
}

export default App