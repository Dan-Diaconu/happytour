import React from "react"
import { HotelListItemFavorites } from "./HotelListItemFavorites"

export class FavoriteHotels extends React.Component {
    constructor(props) {
        super(props)
    }

    onDisplayToggle = () => this.props.onDisplayToggle()
    onDelete = () => console.log('AAAAAA  seters', item);

    render() {

        console.log('Test for delete ---->  ', this.props.favorites)
        const displayBody = {
            display: this.props.displayBody ? 'block' : 'none'
        }
        return (
            <div className="panel panel-primary">
                <div className="panel-heading apt-addheading" onClick={this.onDisplayToggle}>
                    <span className="glyphicon glyphicon-check"> </span>
                      Favorit Hotels
                </div>
                <div className="panel-body" style={displayBody}><ul>
                    {
                this.props.favorites.map((item, index) => {
            return (
                
                <HotelListItemFavorites item={item} key={index}/>
                
            )
        })
        }</ul>
                </div>
            </div>
        )
    }
}
