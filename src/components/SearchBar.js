import React from 'react';

// Search Bar Component

class SearchBar extends React.Component {
    state = {term: ''};

    onFormSubmit(event) {
        event.preventDefault();

        console.log(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        {/*onChange is a special event handler function that wires up callbacks*/}
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value})}/>
                        {/*abbreviated for single line of code condensing: onChange={e => console.log(e.target.value)} */}
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;