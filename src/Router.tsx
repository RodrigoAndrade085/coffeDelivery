import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Default } from './layouts/Default'
import { OrderSuccess } from './pages/OrderSuccess/OrderSuccess'
import { OrderPayment } from './pages/OrderPayment'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path="/" element={<Home />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/order-payment" element={<OrderPayment />} />
      </Route>
    </Routes>
  )
}
