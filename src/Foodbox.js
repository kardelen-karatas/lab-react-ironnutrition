import React from 'react';

class Foodbox extends React.Component {
  state = {
    quantity: 1,
    counter: 1,
  };

  addQuantity = () => {};

  handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img alt="food" src={this.props.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{`${this.props.calories} cal`}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  name="counter"
                  value={this.state.counter}
                  onChange={this.handleChange}
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={this.addQuantity}>
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div> 
    );
  }
}

export default Foodbox;
