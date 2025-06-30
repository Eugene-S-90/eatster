
import { useRestaurantStore } from '@/store/useRestaurantStore';

export const Loader = () => {
    const { isProductsLoading, isRestaurantLoading } = useRestaurantStore();

    const isLoading = isProductsLoading || isRestaurantLoading;

    return <>
        {isLoading ? <div className="fixed inset-0 flex items-center justify-center bg-[rgba(255,255,255,0.3)] z-50">
            < img src="/spinner.gif" alt="Loading..." width={64} height={64} />
        </div > : null}
    </>

}


