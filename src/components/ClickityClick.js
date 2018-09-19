import React, { Component } from  'react'

class ClickityClick extends React.Component {
    constructor(props){
        super(props)
        this.state={
            hasBeenClicked: false
        }
    }

    handleClick = () => {
        this.setState({
            hasBeenClicked:true
        })
    }


    render(){
        return(
            <p onClick={this.handleClick}>I have {this.state.hasBeenClicked?null:'not'} been Clicked!</p>
        )
    }
}

export default ClickityClick