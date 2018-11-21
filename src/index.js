import React from "react"
import ReactDom from "react-dom"
import "./calculator.css"

class Calculator extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			number: "0",
			stack_num: null,
			operacion: null,
			result: null,
			interaction: "",
			num_lock: false,
			freeze: true

		}
	}	

	insert(interaction) {
		let number = this.state.number;

		if (number.length < 9) {
			if (number == 0 && interaction != "." && number.length<2)
				number = "";


			number += interaction == "." && (number.includes(".") || number.length == 8) ? "" : interaction;
			this.setState({
				number: number,
				stack_num: parseFloat(number),
				num_lock: true
			});
		}
	}

		calculate() {
		if (this.state.number == "ERROR"){
			return;	
		} 
		let stack_result = this.state.result
		if(this.state.operacion == "+"){
			console.log("Suma")
			this.state.result = stack_result + this.state.stack_num
		}
		else if(this.state.operacion == "-"){
			console.log("Resta")
			this.state.result = stack_result - this.state.stack_num
		}
		else if(this.state.operacion == "X"){
			console.log("Mult")
			this.state.result = stack_result * this.state.stack_num
		}
		else if(this.state.operacion == "/"){
			console.log("Div")
			this.state.result = stack_result - this.state.stack_num
		}
		else if(this.state.operacion == "M"){
			console.log("Modulo")
			this.state.result = stack_result - this.state.stack_num
		}

		if (this.state.result > 999999999 || this.state.result < 0) {
			this.setState({
				number: "ERROR",
				stack_num: null,
				operacion: null,
				result: null,
				interaction: "",
				num_lock: false,
			})
			return;
		} else {
			let temp =this.state.result.toString();
			let size = temp.length

			if (size > 8) {
				this.setState({
					number: temp.substring(0, 8), 
					freeze: false
				})
			} else {
				this.setState({
					number:this.state.result.toString()
				})
			}
		}

	}

	handleClick(interaction){
		let operaciones = ["+", "-", "X", "/", "M"]
		switch (interaction) {
			case "0":
			case "1":
			case "2":
			case "3":
			case "4":
			case "5":
			case "6":
			case "7":
			case "8":
			case "9":
			case ".":
				if (this.state.number == "ERROR") return;
				if (/[\X|\/|\-|+|M]/g.test(this.state.interaction)) {
					this.setState({number: "0"}, function() {this.insert(interaction)});
				} else {
					this.insert(interaction);
				}

				this.setState({num_lock: false})

				break;

			case "/":
			case "+":
			case "-":
			case "X":
			case "M":

				if (this.state.num_lock && this.state.operacion != null) {
					this.calculate();
					this.setState({num_lock: false})
				} else {
					this.setState({
						stack_num: parseFloat(this.state.number),
						result: parseFloat(this.state.number)
					})
				}
				this.setState({ operacion: interaction })
				break;
			case "=":
				if (this.state.operacion != null) {
					this.calculate();
					this.setState({num_lock: false})
				}
				break;

			case "C":
				this.setState({
					number: "0",
					num_lock: false,
					stack_num: null,
					result: null,
					operacion: null
				})
				break;
			case "del.": 
				if(this.state.number.length >1){
					this.setState({
						number: this.state.number.substring(0, this.state.number.length- 1)
					})
				}
				else{
					this.setState({
						number: "0"
					})
				}
		}
		this.setState({interaction: interaction})
}

	render(){
		return(
			<div className = "main">
				<div className = "container">
					<div className = "showcase">
					{this.state.number}
					</div>
					<button className = "button action" onClick = {this.handleClick.bind(this, "C")}> C </button>
					<button className = "erase button action" onClick = {this.handleClick.bind(this, "del.")}> del. </button>
					<button className = "button action" onClick = {this.handleClick.bind(this, "M")}> M </button>
					<button className = "button action" onClick = {this.handleClick.bind(this, "/")}> / </button>
					<button className = "button number" onClick = {this.handleClick.bind(this, "7")}> 7 </button>
					<button className = "button number" onClick = {this.handleClick.bind(this, "8")}> 8 </button>
					<button className = "button number" onClick = {this.handleClick.bind(this, "9")}> 9 </button>
					<button className = "button action" onClick = {this.handleClick.bind(this, "X")}> X </button>
					<button className = "button number" onClick = {this.handleClick.bind(this, "4")}> 4 </button>
					<button className = "button number" onClick = {this.handleClick.bind(this, "5")}> 5 </button>
					<button className = "button number" onClick = {this.handleClick.bind(this, "6")}> 6 </button>
					<button className = "button action" onClick = {this.handleClick.bind(this, "-")}> - </button>
					<button className = "button number" onClick = {this.handleClick.bind(this, "1")}> 1 </button>
					<button className = "button number" onClick = {this.handleClick.bind(this, "2")}> 2 </button>
					<button className = "button number" onClick = {this.handleClick.bind(this, "3")}> 3 </button>
					<button className = "button action" onClick = {this.handleClick.bind(this, "+")}> + </button>
					<button className = "zero button number" onClick = {this.handleClick.bind(this, "0")}> 0 </button>
					<button className = "button action" onClick = {this.handleClick.bind(this, ".")}> . </button>
					<button className = "button action" onClick = {this.handleClick.bind(this, "=")}> = </button>
				</div>
				
			</div>
			)
	}
}

ReactDom.render(
	<Calculator />, 
	document.getElementById("root"))