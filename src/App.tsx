
import { Header } from './components/restaurant/Header'
import { RestaurantContentWrapper } from './components/restaurant/RestaurantContentWrapper'
import RestaurantLayout from './layouts/RestaurantLayout'
import { ScrollUpButton } from './components/ScrollUpButton'
import { ProductDialog } from './components/product/ProductDialog'
import { CartBar } from './components/CartBar'
import { Loader } from './components/Loader'

function App() {
  return (
    <RestaurantLayout>
      <Header />
      <RestaurantContentWrapper />
      <ProductDialog />
      <ScrollUpButton />
      <CartBar />
      <Loader />
    </RestaurantLayout>
  )
}

export default App