
import { useEffect, useRef } from "react";
import { CategorySection } from "./CategorySection"
import { CategoryTabs } from "./CategoryTabs"
import { useRestaurantStore } from "../../store/useRestaurantStore";
import { queryParamsParser } from "../../lib/utils";


export const RestaurantContentWrapper = () => {
    const { fetchMeals } = useRestaurantStore();
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


    return (
        <>
            <CategoryTabs />
            <CategorySection />
        </>
    )
}
