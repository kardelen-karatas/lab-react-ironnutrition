import React from 'react';
import foods from './foods.json';

import Foodbox from './Foodbox';
import AddFood from './AddFood';

class FoodboxList extends React.Component {
  state = {
    foods: foods,
    showForm: false,
  };

  addFood = (food) => {
    let foods = this.state.foods;
    foods.push(food);
    this.setState({ foods });
  };

  addFoodForm = () => {
    return <AddFood addFoodHandler={this.addFood} showForm={this.toogleForm} />;
  };

  toogleForm = () => {
    if (this.state.showForm) {
      this.setState({ showForm: false });
    } else {
      this.setState({ showForm: true });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.toogleForm}>Add food</button>
        {this.state.showForm ? this.addFoodForm() : null}
        {this.state.foods.map((food) => (
          <Foodbox
            name={food.name}
            calories={food.calories}
            image={food.image}
          />
        ))}
      </div>
    );
  }
}

export default FoodboxList;
