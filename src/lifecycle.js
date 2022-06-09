import React, { Component } from 'react'

export class lifecycle extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"adila"
        }
        console.log('lifecycle constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('lifecycle getDerivedStateFromProps')
        return null

    }
    componentDidMount(){
        console.log('lifecycle componentDidmount')
    }
   
  render() {
    console.log('lifecycle render ')
    return <div>lifecycle</div>
    
  }
}

export default lifecycle