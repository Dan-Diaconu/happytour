import React from "react"

export class FavoriteHotels extends React.Component {
    constructor(props) {
        super(props)
        this.state = {   }
    }

    onDisplayToggle = () => this.props.onDisplayToggle()

    render() {
        const displayBody = {
            display: this.props.displayBody ? 'block' : 'none'
        }
        return (
            <div className="panel panel-primary">
                <div className="panel-heading apt-addheading" onClick={this.onDisplayToggle}>
                    <span className="glyphicon glyphicon-check"> </span>
                      Favorit Hotels
                </div>
                <div className="panel-body" style={displayBody}>
                </div>
            </div>
        )
    }
}
