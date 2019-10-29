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
        fetch('http://localhost:3000/dataHotel.json', { method: 'get' })
            .then(response => response.json())
            .then(json => {
                this.setState({ appointments : json });

  //              console.log('----componentDidMount--->', this.state.appointments)
            })       
    }

    onDelete = item => this.setState(prevState => {
        return {
            appointments: _.without(prevState.appointments, item),
            favorites: [...this.state.favorites, item]
        }
    })

    onDeleteFav = item => this.setState(prevState => {
        return {
            favorites: _.without(prevState.favorites, item),
            appointments: [...this.state.appointments, item]
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
                _.includes(item.brandName.toLowerCase(), searchText) ||
                (item.address.city != null ? _.includes(item.address.city.toLowerCase(), searchText) : '' ) ||
                (item.address.country != null ? _.includes(item.address.country.toLowerCase(), searchText)  : '' ) 
//                || _.includes(item.manager.name.toLowerCase(), searchText)
//                || _.includes(item.openingDate, searchText) 
            )
        }) : filteredApts
        filteredApts = _.orderBy(filteredApts, item => item[orderBy].toLowerCase(), sortDir)
        filteredApts = filteredApts.map((item, index) => {
            return (
                <HotelListItem item={item} key={index} onDelete={this.onDelete} />

                    /*                     
                     <HotelListItem item={item} key={item.propertyCode} onDelete={this.onDelete} />
                    */

            )
        })

        const displayBody = this.state.displayBody

        return (
            <div className="interface">
                <FavoriteHotels displayBody={displayBody}
                    onDisplayToggle={this.onDisplayToggle} favorites ={this.state.favorites}/>


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
