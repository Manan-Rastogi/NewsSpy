import React, { Component } from 'react'

export default class Spinner extends Component{
    render(){
        return (
            <div className="text-center">
                <img src={require("../Images/SPINNER.gif")} alt="loading" />
            </div>
        )
    }
}