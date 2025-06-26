

export default function NotFound({ restaurantError }: { restaurantError?: string }) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#129d42]">
            <span className="text-white text-2xl font-bold">{JSON.stringify((restaurantError ?? "") + " :(")}</span>
        </div>
    )
}
