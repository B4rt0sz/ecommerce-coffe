import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
  items: localStorage.getItem('items')
    ? JSON.parse(localStorage.getItem('items'))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  cartFreeShipping: false,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      )

      if (itemIndex >= 0) {
        state.items[itemIndex].cartQuantity += 1
        toast.success(`Increased '${state.items[itemIndex].title}' quantity!`, {
          position: 'bottom-right',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: 'dark',
          style: { fontSize: '16px' },
        })
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 }
        state.items.push(tempProduct)
        toast.success(`Added '${action.payload.title}' to cart!`, {
          position: 'bottom-right',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: 'dark',
          style: { fontSize: '16px' },
        })
      }

      localStorage.setItem('items', JSON.stringify(state.items))
    },

    removeFromCart: (state, action) => {
      const nextCartItems = state.items.filter(
        (item) => item.id !== action.payload.id
      )

      state.items = nextCartItems
      localStorage.setItem('items', JSON.stringify(state.items))

      toast.error(`Removed '${action.payload.title}' from cart!`, {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'dark',
        style: { fontSize: '16px' },
      })
    },

    decreaseCart: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      )

      if (state.items[itemIndex].cartQuantity > 1) {
        state.items[itemIndex].cartQuantity -= 1

        toast.error(`Decreased '${action.payload.title}' cart quantity!`, {
          position: 'bottom-right',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: 'dark',
          style: { fontSize: '16px' },
        })
      } else if (state.items[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.items.filter(
          (item) => item.id !== action.payload.id
        )

        state.items = nextCartItems

        toast.error(`Removed '${action.payload.title}' from cart!`, {
          position: 'bottom-right',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: 'dark',
          style: { fontSize: '16px' },
        })
      }
      localStorage.setItem('items', JSON.stringify(state.items))
    },

    clearCart: (state, action) => {
      state.items = []
      toast.error(`Cart cleared!`, {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'dark',
        style: { fontSize: '16px' },
      })
      localStorage.setItem('items', JSON.stringify(state.items))
    },

    getTotals: (state, action) => {
      let { total, quantity } = state.items.reduce(
        (cartTotal, items) => {
          const { price, cartQuantity } = items
          const itemTotal = price * cartQuantity

          cartTotal.total += itemTotal
          cartTotal.quantity += cartQuantity

          return cartTotal
        },
        { total: 0, quantity: 0 }
      )

      state.cartTotalQuantity = quantity
      state.cartTotalAmount = total
    },

    freeShipping: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.freeShipping === true
      )

      if (itemIndex >= 0) {
        state.cartFreeShipping = true
      } else state.cartFreeShipping = false
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  decreaseCart,
  clearCart,
  getTotals,
  freeShipping,
} = cartSlice.actions

export const selectItems = (state) => state.cart.items
export const cartAmout = (state) => state.cart.cartTotalQuantity
export const subtotalAmout = (state) => state.cart.cartTotalAmount
export const shippingPrice = (state) => state.cart.cartFreeShipping

export default cartSlice.reducer
