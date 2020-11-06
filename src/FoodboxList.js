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
    selectedFoods: [],
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

  foodInfo = (food) => {
    let selectedFoods = [...this.state.selectedFoods];
    selectedFoods.push(food);
    this.setState({ selectedFoods });
  };

  render() {
    let totalCal = this.state.selectedFoods.reduce((a, f) => {
      return a + (f.calories*f.quantity)
    }, 0 )
    return (
      <div className="mb-1">
      <h1 className="title">IronNutrition</h1>
        <SearchBar filterFood={this.filterFood} />

        <div className="columns">
          <div className="rows">
            {this.state.filteredFoods.map((food) => (
              <Foodbox {...food} handleFoodInfo={this.foodInfo} />
            ))}
          </div>
          <div className="content is-medium column">
            <h2 className="subtitle">Today's food</h2>
            <lu>
              {this.state.selectedFoods.map((f, i) => (
                <li key={i}>
                  {f.quantity} {f.name} = {f.calories * f.quantity}
                </li>
              ))}
            </lu>
            <p></p>
            <p>{`Total: ${totalCal} cal`}</p>
          </div>
        </div>

        <button class="button is-info is-outlined" onClick={this.toogleForm}>
          Add food
        </button>
        {this.state.showForm ? this.addFoodForm() : null}
      </div>
    );
  }
}

export default FoodboxList;
