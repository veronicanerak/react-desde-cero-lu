import React from "react"
import { Component } from "react"

const withLoader = (propValue, WrappedComponent) => {
    return class WithLoader extends Component {

        constructor(props) {
            super(props)
        }

        render() {            
            return this.props[propValue].length === 0
            ?
            <h1>Loading from HCO...</h1>
            :
            <WrappedComponent {...this.props} />
        }
    }
}

export default withLoader