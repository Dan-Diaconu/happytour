import React from "react"
import _ from "lodash"

import { HotelListItem } from "./HotelListItem"
import { FavoriteHotels } from "./FavoriteHotels"
import { SearchHotel } from "./SearchHotel"

export class MainInterfaceHotel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayBody : false,
            appointments : [],
            orderBy: 'name',
            sortDir: 'asc',
            searchText: '',
            favorites: []
        }
    }

    componentDidMount() {
        // fetch('http://localhost:3000/data.json', { method: 'get' })
        fetch('http://localhost:3000/dataHotel.json', { method: 'get' })
            .then(response => response.json())
            .then(json => {
                this.setState({ appointments : json })
            })       
    }

    onDelete = item => this.setState(prevState => {
        return {
            appointments: _.without(prevState.appointments, item)
        }
    })

    onDisplayToggle = () => this.setState(prevState => {
        return { displayBody: !prevState.displayBody }
    })


    onSortChange = (orderBy, sortDir) => this.setState({ orderBy, sortDir })

    onSearch = searchText => this.setState({ searchText })

    render() {

        let filteredApts = this.state.appointments
        const orderBy = this.state.orderBy
        const sortDir = this.state.sortDir
        const searchText = this.state.searchText

        filteredApts = searchText ? filteredApts.filter(item => {
            return (
                _.includes(item.name.toLowerCase(), searchText) ||
                _.includes(item.brandName.toLowerCase(), searchText) 
//                || _.includes(item.manager.name.toLowerCase(), searchText)
//                 || _.includes(item.openingDate, searchText) 
//                 || _.includes(item.address.city, searchText)
            )
        }) : filteredApts
        filteredApts = _.orderBy(filteredApts, item => item[orderBy].toLowerCase(), sortDir)
        filteredApts = filteredApts.map((item, index) => {
            return (
                <HotelListItem item={item} key={index} onDelete={this.onDelete} />
            )
        })

        const displayBody = this.state.displayBody
        return (
            <div className="inderface">
                <FavoriteHotels displayBody={displayBody}
                    onDisplayToggle={this.onDisplayToggle} />


                <SearchHotel
                    orderBy={orderBy}
                    sortDir={sortDir}
                    searchText={searchText}
                    onSearch={this.onSearch}
                    onSortChange={this.onSortChange}/>
                <ul className="item-list media-list">{filteredApts}</ul>
            </div>
        )
    }
}
