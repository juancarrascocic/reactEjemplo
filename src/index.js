import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class TextName extends React.Component{
	constructor(){
		super();
		this.state={
			name:'',
		};
	}
	render(){
		return(
		<input type="text" onChange={this.onChange} value={this.value}></input>
		);	
	}
	onChange(){
		this.setState({name : this.value});
	}
}


function TextApellido(props){
	return(
		<input type="text" onChange={props.onChange} value={props.apellido}></input>
		);
}

function ButtonSubmit(props){
	return(
		<button onClick={props.onClick}>Submit</button>
		);
}
function MostrarInfo(props){
	return(
		<p>{"Nombre: " + props.name + " " + props.apellido}</p>
		);
}
class Formulario extends React.Component{
	render(){

		return(
			<div>
			<div id="divForm">
			{this.renderTextName()}
			----------------
			{this.renderTextApellido()}
			----------------
			{this.renderButtonSubmit()}
			</div>
			<br/>

			<div id="divMostrar" bgcolor="#E6E6FA">
			{this.renderMostrarInfo()}
			</div>
			</div>
			);
	}
	constructor(){
		super();
		this.state={
			name:'',
			apellido:'',
		}
	}
	handleClick(){
		this.setState({name : this.state.name});
		
	}

	handleNameChange(event){
		this.setState({name : event.target.value});
	}
	handleApellidoChange(event){
		this.setState({apellido: event.target.value});
	}
	renderTextName(){
		return(
			<TextName
			value = {this.state.name}
			onChange={evt => this.handleNameChange(evt)}/>
			);
	}
	
	renderTextApellido(){
		return(
			<TextApellido
			value = {this.state.apellido}
			onChange={evt => this.handleApellidoChange(evt)}/>

			);
	}
	renderButtonSubmit(){
		return(
			<ButtonSubmit
			onClick={() => this.handleClick()}
			/>
			);
	}

	renderMostrarInfo(){
		return(
			<MostrarInfo
			name ={this.state.name}
			apellido = {this.state.apellido}/>
			);
	}

}


ReactDOM.render(
	<Formulario />,
	document.getElementById('root')
	);