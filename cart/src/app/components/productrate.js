'use client'

import '@smastome/react-rating/style.css'
import { Rating } from '@smastrom/react-rating'

export default function productrate({ rate, count }){
    return (
        <div classname="flex">
        <Rating style={{ maxWidth: 100}} value={rate} readOnly /> {count}{' '}
        reviews
        </div>
    )
}