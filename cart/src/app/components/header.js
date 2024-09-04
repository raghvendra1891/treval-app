import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
export default function Header() {
    const { loading , cartitem } = useselector((state) => state.cart)
return (
<header>
<nav className="flex justify-between items-center h-12 px-4 shadow-md Obg-gray-800 text-white">
<Link href="/" className="text-lg font-bold">
Amazon Shopping Cart
</Link>
<div>
<span className="cant-badge">
    {loading ? '' : cartitem.reduce((a, c) => a+c.qty , 0)}
</span>
<Link href="/cart">Cart</Link>
</div>
</nav>
</header>
)
}