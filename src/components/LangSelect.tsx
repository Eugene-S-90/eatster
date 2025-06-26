import { useState, useEffect } from "react"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select"
import { useRestaurantStore } from "@/store/useRestorauntStore"

export const LangSelect = () => {
  const { restaurant } = useRestaurantStore()
  const [selectedLang, setSelectedLang] = useState("")

  const languages = restaurant?.available_languages ?? []

  useEffect(() => {
    if (!selectedLang && languages.includes("en")) {
      setSelectedLang("en")
    }
  }, [languages, selectedLang])

  return (
    <Select value={selectedLang} onValueChange={setSelectedLang}>
      <SelectTrigger className="w-[70px]">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {languages.map((lang: string) => (
            <SelectItem key={lang} value={lang}>
              {lang.toUpperCase()}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}