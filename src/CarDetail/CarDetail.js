import React from "react";

export default class CarDetail extends React.Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h1>Car Detail for {this.props.match.params.name} </h1>
            </div>
        );
    }
}