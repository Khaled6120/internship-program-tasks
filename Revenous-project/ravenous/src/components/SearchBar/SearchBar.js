import React, { useState } from 'react'
import './SearchBar.css'

function SearchBar({ searchYelp }) {
    const [state, setState] = useState({ term: '', location: '', sortBy: 'best_match' })

    const sortByOptions = {
        'Best Match': 'best_match',
        'Highest Rated': 'rating',
        'Most Reviewed': 'review_count'
    }

    const getSortByClass = (sortByOption) => {
        if (state.sortBy === sortByOption) {
            return 'active';
        } else {
            return '';
        }
    }

    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return (
                <li
                    className={getSortByClass(sortByOptionValue)}
                    key={sortByOptionValue}
                    onClick={() => handleSortByChange(sortByOptionValue)}
                >
                    {sortByOption}
                </li>
            );
        });
    }

    const handleSortByChange = (sortByOption) => {
        setState({ ...state, sortBy: sortByOption });
    }

    const handleTermChange = (event) => {
        setState({ ...state, term: event.target.value });
    }

    const handleLocationChange = (event) => {
        setState({ ...state, location: event.target.value });
    }

    const handleSearch = (event) => {

        searchYelp(state.term, state.location, state.sortBy);

        event.preventDefault();
    }

    return (
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    {renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input
                    placeholder="Search Businesses"
                    onChange={handleTermChange}
                />
                <input
                    placeholder="Where?"
                    onChange={handleLocationChange}
                />
            </div>
            <div className="SearchBar-submit" onClick={handleSearch}>
                <a>Let's Go</a>
            </div>
        </div>
    )
}

export default SearchBar;
