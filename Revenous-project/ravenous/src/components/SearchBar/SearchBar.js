import React from 'react'
import './SearchBar.css'

const sortByOptions = {
    'Best Match': 'recommended',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
}

function SearchBar() {
    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map(sortByOption => {
            return <li key={sortByOptions[sortByOption]}>{sortByOption}</li>
        })
    }

    return (
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    {renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input placeholder="Search Businesses" />
                <input placeholder="Where?" />
            </div>
            <div className="SearchBar-submit">
                <a>Let's Go</a>
            </div>
        </div>
    )
}

export default SearchBar