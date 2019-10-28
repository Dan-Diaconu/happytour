import React from "react"


export class FavoriteHotels extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            petName: '',
            ownerName: '',
            aptDate: '',
            aptTime: '',
            aptNotes: '',
        }
    }

    onDataChange = input => this.setState({ [input.target.name]: input.target.value })

    onDisplayToggle = () => this.props.onDisplayToggle()

    onSubmit = event => {
        this.props.onNewAppointment(this.state)
        event.preventDefault()
    }

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
                    <form className="add-appointment form-horizontal"
                        onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label className="col-sm-2 control-label" htmlFor="petName">Pet Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control"
                                    name="petName"
                                    value={this.state.petName} onChange={this.onDataChange}
                                    id="petName" placeholder="Pet's Name" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label" htmlFor="petOwner">Pet Owner</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control"
                                    name="ownerName"
                                    value={this.state.ownerName} onChange={this.onDataChange}
                                    id="petOwner" placeholder="Owner's Name" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label" htmlFor="aptDate">Date</label>
                            <div className="col-sm-4">
                                <input type="date" className="form-control"
                                    name="aptDate"
                                    value={this.state.aptDate} onChange={this.onDataChange}
                                    id="aptDate" />
                            </div>
                            <label className="col-sm-2 control-label" htmlFor="aptTime">Time</label>
                            <div className="col-sm-4">
                                <input type="time" className="form-control"
                                    name="aptTime"
                                    value={this.state.aptTime} onChange={this.onDataChange}
                                    id="aptTime" />
                            </div>

                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label" htmlFor="aptNotes">Apt. Notes</label>
                            <div className="col-sm-10">
                                <textarea className="form-control" rows="4" cols="50"
                                    id="aptNotes" name="aptNotes"
                                    value={this.state.aptNotes} onChange={this.onDataChange}
                                    placeholder="Appointment Notes"></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button type="submit" className="btn btn-primary pull-right">Add Appointment</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
