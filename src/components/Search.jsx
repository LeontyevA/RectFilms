import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            searchFuncion: props.searchCards
        }
    }

    render() {
        return (
            <div className="input-field col s6">
                <input
                    id="search"
                    type="text"
                    className="validate"
                    preloader='Поиск'
                    value={this.state.search}
                    onChange={(e) => {
                        this.setState({ search: e.target.value });
                        this.state.searchFuncion(e.target.value)
                    }
                    }
                />
                {/* <label for="last_name">Last Name</label> */}
            </div>
        );
    }
}

export default Search;