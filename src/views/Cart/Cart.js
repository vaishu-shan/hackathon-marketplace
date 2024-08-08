import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/cart'
import UserAvatar from "../../assets/images/avatar.jpg";

const Cart = () => {
    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)

    console.log("cartItems", cartItems)
    return (
        <>
            <div
                id="section-1"
                className="flex flex-col gap-3 w-full h-[9pc] sm:h-[15pc] items-center justify-center "
                style={{ minHeight: "60vh" }}
            >
                <h2 className="text-2xl sm:text-3xl dark:text-white/90 font-semibold">
                    Cart NFTs
                </h2>
                <div className="flex flex-col gap-4" style={{ marginTop: 50 }}>
                    {cartItems.map((item) => (
                        <div className="flex justify-between items-center" key={item.id}>

                            <div className="flex gap-4">
                                <img src={UserAvatar} alt={item?.name} className="rounded-md h-24" />
                                <div className="flex flex-col justify-center">
                                    <h1 className="text-lg text-white font-bold">{item?.name}</h1>
                                    <p className="text-gray-600">{item?.date}</p>
                                </div>
                            </div>
                            <div className="flex gap-4" style={{ marginLeft: 18 }}>
                                <button
                                    className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                    onClick={() => {
                                        addToCart(item)
                                    }}
                                >
                                    +
                                </button>
                                <p className='text-white'>{item.quantity}</p>
                                <button
                                    className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                    onClick={() => {
                                        removeFromCart(item)
                                    }}
                                >
                                    -
                                </button>
                            </div>
                        </div>
                    ))}
                    {
                        cartItems.length > 0 ? (
                            <div className="flex flex-col justify-between items-center">
                                <button
                                    className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                    onClick={() => {
                                        clearCart()
                                    }}
                                >
                                    Clear cart
                                </button>
                            </div>
                        ) : (
                            <h1 className="text-lg text-white font-bold">Your cart is empty</h1>
                        )
                    }
                </div>

            </div>




            {/* <div className="flex-col flex items-center fixed inset-0 left-1/4 bg-white gap-8  p-10  text-black dark:text-white font-normal uppercase text-sm" style={{ background: 'transparent' }}>
                <h1 className="text-2xl font-bold">Cart</h1>
                <div className="absolute right-16 top-10">

                </div>
                <div className="flex flex-col gap-4">
                    {cartItems.map((item) => (
                        <div className="flex justify-between items-center" key={item.id}>
                            <div className="flex gap-4">
                                <img src={item.thumbnail} alt={item.title} className="rounded-md h-24" />
                                <div className="flex flex-col">
                                    <h1 className="text-lg font-bold">{item.title}</h1>
                                    <p className="text-gray-600">{item.price}</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <button
                                    className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                    onClick={() => {
                                        addToCart(item)
                                    }}
                                >
                                    +
                                </button>
                                <p>{item.quantity}</p>
                                <button
                                    className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                    onClick={() => {
                                        removeFromCart(item)
                                    }}
                                >
                                    -
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {
                    cartItems.length > 0 ? (
                        <div className="flex flex-col justify-between items-center">
                            <h1 className="text-lg font-bold">Total: ${getCartTotal()}</h1>
                            <button
                                className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                onClick={() => {
                                    clearCart()
                                }}
                            >
                                Clear cart
                            </button>
                        </div>
                    ) : (
                        <h1 className="text-lg font-bold">Your cart is empty</h1>
                    )
                }
            </div> */}
        </>
    )


}

export default Cart
