import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProductRate from './productrate'
export default function ProductItem({ product }) {
return (
<div className="card">
<Link href={`/product/${product.id}`}>
<Image
src={product.image}
width={400}
height={400}
alt={product.name}
className="rounded shadow object-cover h-96 w-full"
/>
</Link>
<div className="flex flex-col items-center justify-center p-5">
<Link href={`/product/${product.id}`}>
<h2 className="text-lg">{product.name}</h2>
</Link>
<productrate rate={product.rating} count={product.numReviews} />
<p className="mb-2">{product.brand}</p>
<p>${product.price}</p>
< Addtocart showqty={false} product ={product} increseperclick={true}/>
</div>
</div>
)
}