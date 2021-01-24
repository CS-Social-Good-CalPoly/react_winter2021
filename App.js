import React from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Clear from "./components/Clear";

class App extends React.Component {
    state = {input: "", preNum: "", op: ""};
    
    addToInput = val => {
        this.setState({input: this.state.input + val})
    }
    
    addZeroInput = val => {
        if(this.state.input !== "") {
            this.setState({input: this.state.input + val})
        }
    }
    
    addDecimal = val => {
        if(this.state.input.indexOf(".") == -1) {
            this.setState({input: this.state.input + val})
        }
    }
    
    clearInput = () => {
        this.setState({input: ""})
    }
    
    add = () => {
        this.setState({preNum: this.state.input, input: "", op: "+"});    
    }
    
    eval = () => {
        if (this.state.op === "+") {
            this.setState({input: parseFloat(this.state.preNum) + parseFloat(this.state.input)})
        }
        
    }
    
    render() {
        return(
            <div className="app">
                <div className="calc-wrapper">
                    <div className="row">
                        <Input in={this.state.input}></Input>
                    </div>
                    <div className="row">
                        <Button handleClick={this.addToInput} id="7"></Button>
                        <Button handleClick={this.addToInput} id="8"></Button>
                        <Button handleClick={this.addToInput} id="9"></Button>
                        <Button id="/"></Button>
                    </div>
                    <div className="row">
                        <Button handleClick={this.addToInput} id="4"></Button>
                        <Button handleClick={this.addToInput} id="5"></Button>
                        <Button handleClick={this.addToInput} id="6"></Button>
                        <Button id="*"></Button>
                    </div>
                    <div className="row">
                        <Button handleClick={this.addToInput} id="1"></Button>
                        <Button handleClick={this.addToInput} id="2"></Button>
                        <Button handleClick={this.addToInput} id="3"></Button>
                        <Button handleClick={this.add} id="+"></Button>
                    </div>
                    <div className="row">
                        <Button handleClick={this.addDecimal} id="."></Button>
                        <Button handleClick={this.addZeroInput} id="0"></Button>
                        <Button handleClick={this.eval} id="="></Button>
                        <Button id="-"></Button>
                    </div>
                    <div className="row">
                        <Clear handleClick={this.clearInput} id="Clear"></Clear>
                    </div>
                </div>
            </div>           
        )
    }
}

export default App;