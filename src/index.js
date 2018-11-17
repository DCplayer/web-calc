import React from 'react'
import ReactDom from 'react-dom'
import './calculator.css'

class Calculator extends React.Component{
	constructor(props){
		super(props);  
		this.state={
			number: '0', 
			stack_num: 0, 
			operation: null, 
			decimal: false, 
			lastBtn: ''
		}
	}

	insert(interaction){
		if(this.state.number.length >= 9){
			return
		}
		console.log(interaction)

		switch (interaction){
			case '1': 
			case '2':
			case '3':
			case '4':
			case '5':
			case '6':
			case '7':
			case '8':
			case '9':
				if(this.state.number === '0'){
					this.setState({
						number: interaction
					})
				}
				else{
					let tempNumber = this.state.number + interaction
					this.setState({
						number: tempNumber
					})
				}
			case '0':
				if(this.state.number != '0' && interaction === '0'){
					let value = this.state.number + '0'
					this.setState({
						number: value
					})
				}
			case '.': 
				if(!this.state.number.includes('.') && this.state.number.length < 8){
					this.setState({
						number: this.state.number + '.'
					})
				}

		}
		console.log(this.state.number)


	}

	calculate(){
		if(this.state.number == "ERROR"){
			return; 
		}

		if(this.state.operation == '+'){
			this.state.result = this.state.stack_num + parseInt(this.state.number); 
		}
		else if(this.state.operation == '-'){
			this.state.result = this.state.stack_num - parseInt(this.state.number); 
		}
		else if(this.state.operation == '/'){
			this.state.result = this.state.stack_num / parseInt(this.state.number); 
		}
		else if(this.state.operation == '*'){
			this.state.result = this.state.stack_num * parseInt(this.state.number); 
		}
		else if(this.state.operation == 'M'){
			this.state.result = this.state.stack_num % parseInt(this.state.number); 
		}

		if(this.state.result > 999999999 || this.state.result < 0){
			this.state.number = 'ERROR'; 
			this.setState({
				stack_num: 0, 
				operation: null, 
				decimal: false, 
				lastBtn: ''
			})

		}
		else{
			let temp = this.state.result.toString(); 
			if(temp.length > 9){
				this.setState({
					number: parseInt(temp.substring(0,9)) 
				})
			}
			else{
				this.setState({
					number: parseInt(temp)
				})
			}
		}

		return; 


	}

	handleClick(){


	}

	render(){
		return(
			<div className = "main">
				<div className = "container">
					<div className = "showcase">
					{this.state.number}
					</div>
					<button className = "button"> C </button>
					<button className = "erase button"> del. </button>
					<button className = "button"> M </button>
					<button className = "button"> / </button>
					<button className = "button" onClick = {this.insert.bind(this, '7')}> 7 </button>
					<button className = "button" onClick = {this.insert.bind(this, '8')}> 8 </button>
					<button className = "button" onClick = {this.insert.bind(this, '9')}> 9 </button>
					<button className = "button"> X </button>
					<button className = "button" onClick = {this.insert.bind(this, '4')}> 4 </button>
					<button className = "button" onClick = {this.insert.bind(this, '5')}> 5 </button>
					<button className = "button" onClick = {this.insert.bind(this, '6')}> 6 </button>
					<button className = "button"> - </button>
					<button className = "button" onClick = {this.insert.bind(this, '1')}> 1 </button>
					<button className = "button" onClick = {this.insert.bind(this, '2')}> 2 </button>
					<button className = "button" onClick = {this.insert.bind(this, '3')}> 3 </button>
					<button className = "button"> + </button>
					<button className = "zero button" onClick = {this.insert.bind(this, '0')}> 0 </button>
					<button className = "button" onClick = {this.insert.bind(this, '.')}> . </button>
					<button className = "button"> = </button>
				</div>
				
			</div>
			)
	}
}

ReactDom.render(
	<Calculator />, 
	document.getElementById('root'))