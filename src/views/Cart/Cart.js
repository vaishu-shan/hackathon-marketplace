import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/cart'
import UserAvatar from "../../assets/images/avatar.jpg";
import { mintTicket } from '../../web3Service/Web3Integration';
import { useSelector } from "react-redux";

const Cart = () => {
    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)
    const AccountState = useSelector((state) => state.EthAccountStates);
    console.log("cartItems", cartItems)


    const EventTicketMint = async () => {
        try {            
            let accAddress = AccountState?.account;
            const mintRes = await mintTicket(accAddress,"0x457A6C81926875CA32028974bf83E001Ea43205d");
            console.log("EventTicketMint", mintRes)
        } catch (e) {
            console.log("err while integration", e)
            return
        }
    }

    return (
        <>
            <div
                id="section-1"
                className="flex flex-col gap-3 w-full h-[9pc] sm:h-[15pc] items-center justify-center "
                style={{ minHeight: "85vh" }}
            >
                               <img
        src="https://opne9reactnext.vercel.app/_next/static/media/bg-home2.d35f9112.png"
        className="left-0 top-[15pc] absolute"
        alt=""
      />
                <h2 className="text-2xl sm:text-3xl dark:text-white/90 font-semibold">
                    Cart  <b className="border-2 sm:text-2xl text-lg lg:shadow-none font-semibold lg:shadow-purple-800/80 sm:border-0 rounded-md shadow-lg shadow-purple-800/80 p-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-500">
       Tickets
        </b>
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
                            <>
                            <div className="flex flex-row justify-center items-center"   style={{marginTop:40}}>
                                <button
                                    className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                    onClick={() => {
                                        clearCart()
                                    }}
                                >
                                    Clear cart
                                </button>
                                <button
                                    className="px-4 py-2 bg-pink-600 text-white text-xs font-bold uppercase rounded hover:bg-pink-500 focus:outline-none focus:bg-gray-700"
                                   style={{marginLeft:20}}
                                    onClick={() => {
                                        EventTicketMint()
                                    }}
                                >
                                    Book Tickets
                                </button>
                            </div>

                            </>
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
