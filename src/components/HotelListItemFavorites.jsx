import React from "react"

export class HotelListItemFavorites extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const item = this.props.item;
        return (
            <li className="hotel-item media">
                <div className="media-left">
                    <button className="btn btn-xs hotel-delete btn-danger">
                        <span className="glyphicon glyphicon-star"></span>
                    </button>
                </div>

                <div className="hotel-info media-body">
                    <div className="hotel-head">
                        <span className="hotel-name">{item.name}</span>
                        <span className="apt-date pull-right">{item.openingDate} Rooms {item.roomCapacity}</span>
                    </div>                    
                    <div className="owner-name"><span className="label-item">Brand Name: </span> {item.brandName}</div>
                    <div className="apt-notes">Manager: {item.manager.name} ( {item.manager.phoneNumber} | {item.manager.emailAddress} ) </div>
                    <div className="apt-notes">City: {item.address.city} Country: {item.address.country} </div>
                    <hr />
                </div>
            </li>
        )
    }
}