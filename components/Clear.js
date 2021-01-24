import React from "react"

class Clear extends React.Component {
    render() {
        return(
            <div className="clear-btn" onClick={() => {this.props.handleClick()}}>
                {this.props.id}
            </div>     
        )
    }
}
export default Clear;