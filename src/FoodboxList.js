import React from 'react';
import foods from './foods.json';

import Foodbox from './Foodbox';
import AddFood from './AddFood';
import SearchBar from './SearchBar';

class FoodboxList extends React.Component {
  state = {
    foods: foods,
    showForm: false,
    filteredFoods: foods,
  };

  addFood = (food) => {
    let foods = this.state.foods;
    foods.push(food);
    this.setState({ foods });
  };

  filterFood = (caracter) => {
    let foods = this.state.foods;
    let filteredFoods = foods.filter((food) => {
      return food.name.toLowerCase().includes(caracter.toLowerCase());
    });
    this.setState({ filteredFoods });
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
        <SearchBar filterFood={this.filterFood} />

        <div className="columns">
          <div className="rows">
            {this.state.showForm ? this.addFoodForm() : null}
            {this.state.filteredFoods.map((food) => (
              <Foodbox
                name={food.name}
                calories={food.calories}
                image={food.image}
              />
            ))}
          </div>
          <button class="button is-info is-outlined" onClick={this.toogleForm}>
          Add food
          </button>
          <div>
            <h2>Today's food</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default FoodboxList;
