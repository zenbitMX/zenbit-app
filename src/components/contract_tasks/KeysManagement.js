import React from "react"


class KeysManagement extends React.Component {

    constructor(props) {
        super()
        this.state = props.connector
        this.mintCSToken = this.mintCSToken.bind(this)
        this.renderOpposite = this.renderOpposite.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    async mintCSToken() {
        console.log(this.state)
        if(this.state.tx_hash !== this.state.hash) {
            window.alert("Llave pública no es la misma que se autorizó con Metamask")
            this.setState({
                hash: ""
            })
            return null
        }
        await this.state._instance.mintBatch(
            this.state._accounts[0],
            [1, 3],
            [50, 1],
            [],
            {from: this.state._accounts[0]}
        )
    }

    renderOpposite(visibility) {
        if(visibility === "initial") {
            return "none"
        } else {
            return "initial"
        }
    }

    handleChange({target}) {
        this.setState({
            hash: target.value
        })
    }

    componentWillReceiveProps(props) {
        this.setState(props.connector)
      }

    render() {
        return(
            <div className="task-container">
                <div className="info-view">
                    <div className="info-container">
                        <h3 className="head3">
                            Tarea 1: Gestión de llaves públicas y privadas con Metamask
                        </h3>
                        <p className="p-desc">
                            Mira el video y pega tu dirección pública de metamask para obtener:
                        </p>
                        <p className="chd">
                            50 zNBT y un certificado de Ciber Seguridad Nivel 1 CS1
                        </p>
                        <div className="general-input">
                            <input type="text"
                                placeholder="Dirección pública de Metamask"
                                className="input-form"
                                onChange={this.handleChange}
                            />
                            <button type="submit"
                                style={{
                                    display: this.renderOpposite(this.state.buttonVisibility)
                                }}
                                onClick={this.mintCSToken}
                                className="button-submit-contract">
                                    Obtener certificado
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="videos">
                    <iframe  
                    src="https://www.youtube.com/embed/Abzogd_3VBA">
                    </iframe>
                </div>
            </div>
    )}
}

export default KeysManagement
