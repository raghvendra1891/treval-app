import image from 'next/image'
import link from 'next/link'
import { useSelector } from 'react-redux'


export default function CartSidebar() {

    const { loading, cartItems, itemsprice } = useSelector((state) => state.cart)

    const addToCartHandler = (product , qty)=>{
        dispatchEvent(addtocart({...product , qty}))
    }
    const removeFromCartHandler = (id)=>{
        dispatchEvent(removeFromCart(id))
    }
    return (
    <div className="fixed top-0 right-0 w-32 h-full shadow-lg border-1 border-1-gary-700 overflow-scroll">
    {loading? (
    <div className="py-5 px-2">Loading...</div>
    ): cartItems.length === 0 ? (
    <div className="py-5 px-2">Cart is empty</div>
    ) : (
        <>
    <div className="p-2 flex flex-col items-center border-b border-b-gary-600">
    <div>subtotal</div>
    <div className="font-bold text-orange-700">${itemsPrice}</div>
    <div>
    <link
    href="/cart"
    className="w-full text-center p-1 rounded-2xl border-2"
    >
    Go to cart
    </link>
    </div>
    {cartItems.map((item) => (
<div key={item.id}
className="p-2 flex flex-col items-center border-b border-b-gary-600"
>
<Link href={\/product/${item.id}} className="flex items-center">
<Image src={item.image} alt={item.name} width={50} height={50} className="p-1" ></Image>
</Link>
<select
value={item.qty}
onChange ((e) =>
addToCartHandler(item, Number (e.target.value))
}
>
{[...Array(item.count InStock).keys()).map((x) => (
<option key=(x + 1) value={x + 1}>
{x + 1}
</option>
))}
</select>
<button className="default-button mt-2" onclick={() => removeFromCartHandler(item.id)}>
Delete
</button>
</div>
))}
    </div>
    </>
)}
</div>
)
}