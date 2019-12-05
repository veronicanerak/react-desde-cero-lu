import React, {Component} from "react"

class Formulario extends Component {
  
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: ""
        }

        this.changeName = this.changeName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
    }

    changeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    changeEmail(e) {
        this.setState({
            email: e.target.value
        })
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
                            <input 
                                type="text" 
                                onChange={this.changeName} />                        
                        </div>
                        <div className="form__item">
                            <label>Correo Electronico</label>
                            <input type="email"
                                onChange={ this.changeEmail }
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