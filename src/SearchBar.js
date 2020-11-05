import React from 'react';

class SearchBar extends React.Component {
  state = {
      caracter:''
  };

  handleChange = (event) => {
    let value = event.target.value
    const name = event.target.name  

    this.setState({
        [name]: value
    })

    this.props.filterFood(value)

  }

  render() {
    return (
        <div class="field">
          <div class="control">
            <input
              class="input"
              type="text"
              name="caracter"
              placeholder="Search a food"
              value={this.state.caracter}
              onChange={this.handleChange}
            ></input>
          </div>
        </div>
    );
  }
}

export default SearchBar;
