
import { Toaster } from "@/components/ui/sonner"
import { useRestaurantStore } from "@/store/useRestaurantStore"
import NotFound from "./NotFound"

export default function RestauranttLayout({ children }: { children: React.ReactNode }) {

  const { restaurantError} = useRestaurantStore();
  if (restaurantError) {
    return <NotFound restaurantError={restaurantError} />
  }
  return (
    <main className="bg-[#129d42]">
      <div className="m-auto w-full max-w-4xl min-h-[100vh] bg-white shadow-lg relative">
        {children}
      </div>
      <Toaster
        position="top-center"
        richColors
        closeButton
        offset={{ top: '56px' }}
        mobileOffset={{ top: '66px' }}
      />
    </main>
  )
}
