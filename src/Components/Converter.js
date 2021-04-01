import React, { Component } from 'react';
import './Converter.css'

export default class Converter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentyA_value:"",
            currentyB_value:0,
        }

        this.converter = this.converter.bind(this);

    }

    converter() {

        const from_to = `${this.props.currentyA}_${this.props.currentyB}`;
        const url = `https://free.currconv.com/api/v7/convert?q=${from_to}&compact=ultra&apiKey=53ba59dc167b13aa3f06`;

        fetch(url).then(res => {
            return res.json()
        }).then(json => {
            let price = json[from_to];
            let currentyB_value = (parseFloat(this.state.currentyA_value) * price).toFixed(2);

            currentyB_value = isNaN(currentyB_value) ? 0 : currentyB_value;

            this.setState({currentyB_value})
        })
    }

    render() {
        return (
            <div className="converter">
                <h2 className="currenttitle">{this.props.currentyA} para {this.props.currentyB}</h2>
                <input className="inputvalue" type="text" onChange={(event)=>{this.setState({currentyA_value:event.target.value})}} placeholder="Digite o Valor"></input>
                <input className="inputbtn" type="button" value="Converter" onClick={this.converter}></input>
                <h2 className="converterresult">Valor: ${this.state.currentyB_value}</h2>
            </div>
        )
    }
}