import { createContext } from "react";

export let cart = [
    {
        id: 4,
        quantity: 2,
    }
];

export function calculateCartQuantity(){
    let cardQuantity = 0;
    cart.forEach((item) => {
        cardQuantity +=item.quantity;
    })
    return cardQuantity;
}

export function addToCart(productId){
    let matchingItem;
    cart.forEach((cartItem)=>{
        if (cartItem.id === productId )
            matchingItem = cartItem;
    })

    if(matchingItem){
        matchingItem.quantity + 1
    }
    else{
        cart.push(
            {
                id: productId,
                quantity : 1
            }
        )
    }
    console.log(cart);
    
}