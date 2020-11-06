import React from 'react';

class AddFood extends React.Component {
  state = {
    name: '',
    calories: 0,
    image: '',
  };

  handleChange = (event) => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    this.props.addFoodHandler(this.state);

    this.setState({
      name: '',
      calories: 0,
      image: '',
    });

    this.props.showForm();
  };

  render() {
    return (
      <diV className="add-food">
        <form onSubmit={this.handleFormSubmit}>
          <title></title>
          <input
            className="input is-rounded"
            type="text"
            name="name"
            placeholder="food name"
            value={this.state.name}
            onChange={this.handleChange}
          ></input>

          <title></title>
          <input
            className="input is-rounded"
            type="number"
            name="calories"
            placeholder="calories"
            value={this.state.calories}
            onChange={this.handleChange}
          ></input>

          <title></title>
          <input
            className="input is-rounded"
            type="text"
            name="image"
            placeholder="url of image"
            value={this.state.image}
            onChange={this.handleChange}
          ></input>

          <button className="button is-link">Submit</button>
        </form>
      </diV>
    );
  }
}

export default AddFood;
