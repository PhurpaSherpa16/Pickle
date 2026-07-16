import { BrowserRouter } from "react-router-dom"
import MainRoutes from "./routes/routes"
import { CartProvider } from "./context/CartContext"

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <MainRoutes/>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
