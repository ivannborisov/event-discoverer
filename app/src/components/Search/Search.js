import React from 'react';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        console.log(this.state.value)
    }

    render() {
        return (
            <form>
                <label>
                    Search:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
            </form>
        );
    }
}

export default Search;
