import { HelpOutlineRounded } from "@material-ui/icons";
import React from "react";
import NavigationBar from "../../components/NavigationBar"; 
import Helper from "../../tools/SessionStorageHelper";
import Cart from "../../types/Cart";

interface HeaderProps {
    openCart(event: any): void
    cart: Cart;
}

interface HeaderState {
    itemsInCart: number;
}

/**
 * Header Container
 * @extends {Component<Props>}
 */
class Header extends React.Component<HeaderProps, {}> {
    /**
     * Renders the container.
     * @return {string} - HTML markup for the container
     */
    render() {
        return (
            <NavigationBar handleClickCart={this.props.openCart} cart={this.props.cart}/>
        )
    }
    
    componentDidMount = () => {
        this.setState({ itemsInCart: Helper.getCart().getNumberOfItems() });
    }
}
 
export default Header;