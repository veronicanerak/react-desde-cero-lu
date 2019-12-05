import React, {Component} from "react"

class Formulario extends Component {
  
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: ""
        }
    }

    render() {
        return (
            <div className="ed-grid">
                <h1>Main Form</h1>
                <p>Please fill the form:</p>
                <form>
                    <div className="ed-grid m-grid-2">
                        <div className="form__item">
                            <label>Nombre Completo</label>
                            <input type="text" onChange={ e => this.setState({
                                name: e.target.value
                            }) } />                        
                        </div>
                        <div className="form__item">
                            <label>Correo Electronico</label>
                            <input type="email"
                                onChange={ e => this.setState({
                                    email: e.target.value
                                }) }
                            />
                        </div>
                    </div>                    
                </form>
                <div>
                    <h2>{ `Hola, bienvenido: ${this.state.name}` }</h2>
                    <span>{ `Tu correo es: ${this.state.email} ` }</span>
                </div>
            </div>
        )
    }
}

export default Formulario