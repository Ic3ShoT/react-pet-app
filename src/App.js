import React from "react"
import Header from "./components/header";
import Image from "./components/image";
import logo from "./img/logo.jpg"

class App extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            helpText: "Help text",
            userData: '0'
        }

        this.inputClick = this.inputClick.bind(this)
    };

    componentDidUpdate(prevProps) {
        if(this.state.helpText !== "Help") {
            console.log("doesnt match!!!")
        }
    }


    helpText = "Help text!";
    render() {
        return (<div className="name">
            <Header title="Шапка сайта"/>
            <h1>{this.state.helpText}</h1>
            <h2>{this.state.userData}</h2>
            <input placeholder={this.state.helpText}
                   onChange={event => this.setState({userData: event.target.value})}
                   onClick={this.inputClick} onMouseEnter={this.mouseOver} />
            <p>{this.state.helpText === "Help text!" ? "Yes" : "No"}</p>
            <Image image={logo} />
        </div>)
    };

    inputClick() {
        this.setState({helpText: "Changed"});
        console.log("Clicked");
    }
    mouseOver() {console.log("Mouse over")}
};

export default App;