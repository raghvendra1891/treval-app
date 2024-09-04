'use client'
import Header from './header'
import CartSidebar from './cartsidebar'
import { useEffect } from 'react'
import { hideloading } from '../redux/slices/cartslice'

export default function App({ children }) {
    const dispatch = usedispatch()
    useEffect(() => {
        dispatch(hideloading())
    },[dispatch])
return (
<div>
<div className="mr-32">
<Header />
<main className="p-4">{children}</main>
</div>
<CartSidebar />
</div>
)
}