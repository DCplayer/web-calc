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
					<button className = "erase button"> 🠨 </button>
					<button className = "button"> M </button>
					<button className = "button"> / </button>
					<button className = "button"> 7 </button>
					<button className = "button"> 8 </button>
					<button className = "button"> 9 </button>
					<button className = "button"> X </button>
					<button className = "button"> 4 </button>
					<button className = "button"> 5 </button>
					<button className = "button"> 6 </button>
					<button className = "button"> - </button>
					<button className = "button"> 1 </button>
					<button className = "button"> 2 </button>
					<button className = "button"> 3 </button>
					<button className = "button"> + </button>
					<button className = "zero button"> 0 </button>
					<button className = "button"> . </button>
					<button className = "button"> = </button>
				</div>
				
			</div>
			)
	}
}

ReactDom.render(
	<Calculator />, 
	document.getElementById('root'))