
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RestaurantLayout from './layouts/RestaurantLayout'
import RestaurantPage from "./pages/Restaurant";

function App() {
  return (
    <BrowserRouter>
      <RestaurantLayout>
        <Routes>
          <Route index path="/restaurant" element={<RestaurantPage />} />
          <Route path="/stadium" element={"STADIUM PAGE"} />
          <Route path="/train" element={"TRAIN PAGE"} />
        </Routes>
      </RestaurantLayout>
    </BrowserRouter>
  )
}

export default App