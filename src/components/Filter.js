import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
            <div className="filter-result">{this.props.count} Products</div>
            <div className="filter-sort">
               Order {" "}
                <select value={this.props.size} onChange={this.props.sortProducts}>
                    <option>Latest</option>
                    <option value="Lowest">Lowest</option>
                    <option value="Highest">Highest</option>
                </select>
            </div>
            <div className="filter-size">
                Filter{" "}
                <select value={this.props.size} onChange={this.props.filterProducts}>
                <option value="">ALL</option>
                    <option value="Swift">Swift</option>
                    <option value="Celerio">Celerio</option>
                    <option value="AltoK10">AltoK10</option>
                    <option value="Baleno">Baleno</option>
                    <option value="i20">i20</option>
                    <option value="Verna">Verna</option>
                    <option value="Santro">Santro</option>
                    <option value="Maruti 800">Maruti 800</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Brezza">Brezza</option>
                    <option value="Fortuner">Fortuner</option>
                    <option value="Venu">Venu</option>
                    <option value="Creta">Creta</option>
                    <option value="Tata Nexon">Tata Nexon</option>
                    <option value="Tata Tiago">Tata Tiago</option>
                    <option value="Tata Altroz">Tata Altroz</option>
                    <option value="XUV500">XUV500</option>
                    <option value="Harrier">Harrier</option>
                    <option value="Compass">Compass</option>
                </select>
            </div>
        </div>
    )
}
}

