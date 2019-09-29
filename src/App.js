import React from 'react';
import Home from "./components/Home/Home"
import Cart from "./components/Cart/Cart"
import {StateProvider} from "./state/state";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import inventory from "./assets/inventory";

function App() {
    // State context that contains information about current items in the cart
    const initialState = {
        purchasedItems: inventory
    };

    // Reducer that updates the purchased quantity of an item
    const reducer = (state, action) => {
        switch (action.type) {
            case 'updateItemCount':
                return {
                    ...state,
                    purchasedItems: state.purchasedItems.map((item) => {
                        if (item.title === action.title) {
                            return {...item, purchased: action.updatedNum}
                        } else {
                            return item;
                        }
                    })
                };
            default: return state;
        }
    };

    return (
        <StateProvider initialState={initialState} reducer={reducer}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/cart" component={Cart} />
                </Switch>
            </BrowserRouter>
        </StateProvider>
    );
}

export default App;
