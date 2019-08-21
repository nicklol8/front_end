import React from 'react';
import axios from 'axios';
import EditForm from './EditForm';

class AppChild extends React.Component {
  constructor() {
    super();
    this.state = {
      editButton: false,
      currentRestaurant: {
        id: '',
        name: '',
        image: '',
        theme: '',
        address: '',
        menu: '',
        url: '',
        phone: ''
      }
    };

    this.handleEditButton = this.handleEditButton.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleUpdateButton = this.handleUpdateButton.bind(this);
  }

  async handleEditButton(clicked) {
    await this.setState(prevState => ({
      editButton: !prevState.editButton,
      currentRestaurant: {
        id: clicked._id,
        name: clicked.name,
        image: clicked.image,
        theme: clicked.theme,
        address: clicked.address,
        menu: clicked.menu,
        url: clicked.url,
        phone: clicked.phone
      }
    }));
  }

  async handleOnChange(event) {
    const { name, value } = event.target;
    const { currentRestaurant } = { ...this.state };
    const thisRestaurant = currentRestaurant;
    thisRestaurant[name] = value;

    await this.setState({
      currentRestaurant: thisRestaurant
    });
  }

  async handleUpdateButton(event, id) {
    try {
      event.preventDefault();
      await axios.put(
        `http://localhost:3001/bookmarks/${id}`,
        this.state.currentRestaurant
      );
      await this.props.getAllRestaurants();
      await this.setState(prevState => ({
        editButton: !prevState.editButton,
        currentRestaurant: {
          id: '',
          name: '',
          image: '',
          theme: '',
          address: '',
          menu: '',
          url: '',
          phone: ''
        }
      }));
    } catch (err) {
      console.log('PUT Request Error:', err.message);
    }
  }

  render() {
    const { index, eachRestaurant } = this.props;

    const showEditForm = this.state.editButton ? (
      <EditForm
        currentRestaurant={this.state.currentRestaurant}
        handleOnChange={this.handleOnChange}
        handleUpdateButton={this.handleUpdateButton}
      />
    ) : null;

    return (
      <div className='restaurants'>
        {/* <h5>Edit Form</h5> */}
        <h3>Name: {eachRestaurant.name}</h3>

        <a>
          <img src='{eachRestaurant.image}' />
        </a>

        <h3>{eachRestaurant.theme}</h3>
        <h3>{eachRestaurant.address}</h3>
        <h3>{eachRestaurant.menu.item1.item}</h3>
        <h3>{eachRestaurant.menu.item1.price}</h3>
        <h3>{eachRestaurant.menu.item2.item}</h3>
        <h3>{eachRestaurant.menu.item2.price}</h3>
        <h3>{eachRestaurant.menu.item3.item}</h3>
        <h3>{eachRestaurant.menu.item3.price}</h3>
        <h3>{eachRestaurant.url}</h3>
        <h3>{eachRestaurant.phone}</h3>
        <button onClick={() => this.handleEditButton(eachRestaurant)}>
          Edit
        </button>

        {showEditForm}
      </div>
    );
  }
}

export default AppChild;
