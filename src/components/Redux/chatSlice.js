import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
    name: 'chatStates',
    initialState: {
    productData:[],
    ItemInCart : [],
    totleCartItem : 0,
    quantity:1,
    selectedOption:'',
    },

    reducers: {
      

        setproductData: (state, action) => {
            state.productData = [];
            state.productData.push(action.payload);
        },


        setCart: (state, action) => {
            state.ItemInCart = action.payload;
        },

        settotleCartItem: (state,action) => {
            state.totleCartItem += 1
        },

        settotleCartItemtoInital : (state,action) => {
            state.totleCartItem = 0
        },

        decrementTotalCartItem :(state,action) =>{
            state.totleCartItem -= 1
        },

        incrementQuantity: (state,action) => {
            state.quantity += 1
        },

        decrementQuantity: (state,action) => {
            state.quantity -= 1
        },
        
        setSelectedOption: (state,action)=>{
            state.selectedOption = action.payload;
        }
    }
});

export const { setproductData,setCart,settotleCartItem,decrementTotalCartItem,
                incrementQuantity,decrementQuantity,settotleCartItemtoInital,setSelectedOption} = chatSlice.actions;

export default chatSlice.reducer;