

import { Header } from '@/components/restaurant/Header'
import { RestaurantContentWrapper } from '@/components/restaurant/RestaurantContentWrapper'
import { ScrollUpButton } from '@/components/ScrollUpButton'
import { ProductDialog } from '@/components/product/ProductDialog'
import { CartBar } from '@/components/CartBar'
import { Loader } from '@/components/Loader'

const RestaurantPage = () => (
    <>
        <Header />
        <RestaurantContentWrapper />
        <ProductDialog />
        <ScrollUpButton />
        <CartBar />
        <Loader />
    </>
);

export default RestaurantPage;