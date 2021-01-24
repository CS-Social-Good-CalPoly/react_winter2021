import React from "react"

class Button extends React.Component {
    render() {
        return(
            <div className="button" onClick={() => this.props.handleClick(this.props.id)}>
                {this.props.id}
            </div>     
        )
    }
}
export default Button;