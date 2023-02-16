import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            searchFuncion: props.searchCards
        }
    }

    handleKeyDown = (event) => {
        if (event.key === 'Enter')
            this.state.searchFuncion(event.target.value)
    }

    render() {
        return (
            <div className="input-field col s6">
                <input
                    id="search"
                    type="text"
                    className="validate input-search"
                    placeholder='Поиск'
                    value={this.state.search}
                    onChange={(e) =>  this.setState({ search: e.target.value })}
                    onKeyDown={this.handleKeyDown}
                />
                <button 
                    className='btn search-btn'
                    onClick={()=> this.state.searchFuncion(this.state.search)}

                >Поиск</button>
                {/* <label for="last_name">Last Name</label> */}
            </div>
        );
    }
}

export default Search;