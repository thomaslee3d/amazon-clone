export const getBasketTotal = (basket) =>
basket?.reduce((amount,item)=>item.price + amount,0);

export const initialState = {
    basket: [
        {
        id: "12221341",
        title: "Rubber Ducky",
        price: 1.99,
        rating: 5,
        image: "https://www.ourgreenhouse.com/v/vspfiles/photos/1131DUCK-2T.jpg",
        },
        {
        id: "12321341",
        title: "Rubber Ducky",
        price: 1.99,
        rating: 5,
        image: "https://www.ourgreenhouse.com/v/vspfiles/photos/1131DUCK-2T.jpg",
        },
    ],
  user: null,
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            // adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case "REMOVE_FROM_BASKET":
            //logic for removing basket

            // we cloned basket
            let newBasket = [...state.basket];

            const index = state.basket.findIndex(

            // 
            (basketItem) => basketItem.id === action.id
            );
            if (index >= 0) {
                // item exsits in basket, remove it
                newBasket.splice(index, 1);
            } else {
                console.warn(
                `Cant remove product (id: ${action.id} as its not in basket)`
                );
            }
            return { state, basket: newBasket };

        default:
            return state;
    }
};

export default reducer;
