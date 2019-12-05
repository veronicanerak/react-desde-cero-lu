import React, {Component} from "react"

class Formulario extends Component {
  
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            date: new Date()
        }

        this.changeName = this.changeName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeDate = this.changeDate.bind(this)
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

    changeDate(e) {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div className="ed-grid">
                <h1>Main Form {this.props.form_name}</h1>
                <h4>Current Date: { Math.ceil(this.state.date/1000) }</h4>
                <p>Please fill the form:</p>                
                <form id="contact-form">
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

    componentDidMount() {
        let contactForm = document.getElementById("contact-form")
        console.log(contactForm)

        this.intervalDate = setInterval(()=>{
            this.changeDate()
            console.log(new Date())
        }, 1000)
    }

    // info already loaded on the DOM
    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps)
        console.log(prevState)
        console.log("========")
    }

    componentWillUnmount() {
        clearInterval(this.intervalDate)
    }
}

export default Formulario