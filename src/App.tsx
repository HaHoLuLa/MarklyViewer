import { Route, Routes } from "react-router"
import Index from "./route"

export default function App() {
  return (
    <Routes>
      <Route path="/:content?" element={<Index />} />
    </Routes>
  )
}