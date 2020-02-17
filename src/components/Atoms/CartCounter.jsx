import React from "react"
import { createStore, connect } from "react-redux"

const CartCounter = ({ cartLength }) => (
    <li>
        <button className="button tiny ghost">{`Carrito:${cartLength.length}`}</button>
    </li>
)

const mapStateToProps = state => ( // It maps the global state of the app and send it to CartCounter (component) through the Props (global state is converted into Props)
    {
        cartLength: state.cart
    }
)

const mapDispatchToProps = () => {

}

export default connect(mapStateToProps, mapDispatchToProps)(CartCounter)