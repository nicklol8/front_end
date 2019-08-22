import React from 'react';

const EditForm = props => {
  const {
    id,
    name,
    image,
    theme,
    address,
    menu,
    url,
    phone
  } = props.currentRestaurant;

  return (
    <form onSubmit={event => props.handleUpdateButton(event, id)}>
      {/* <h5>Edit Form</h5> */}
      <input
        type='text'
        name='name'
        value={name}
        onChange={props.handleOnChange}
      />
      <input
        type='text'
        name='image'
        value={image}
        onChange={props.handleOnChange}
      />
      <input
        type='text'
        name='theme'
        value={theme}
        onChange={props.handleOnChange}
      />
      <input
        type='text'
        name='address'
        value={address}
        onChange={props.handleOnChange}
      />
      <input
        type='text'
        name='menu'
        value={menu.item1.item}
        onChange={props.handleOnChange}
      />
      <input
        type='text'
        name='menu'
        value={menu.item1.price}
        onChange={props.handleOnChange}
      />
      <input
        type='text'
        name='menu'
        value={menu.item2.item}
        onChange={props.handleOnChange}
      />
      <input
        type='text'
        name='menu'
        value={menu.item2.price}
        onChange={props.handleOnChange}
      />
      <input
        type='text'
        name='menu'
        value={menu.item3.item}
        onChange={props.handleOnChange}
      />
      <input
        type='text'
        name='menu'
        value={menu.item3.price}
        onChange={props.handleOnChange}
      />
      <input
        type='text'
        name='url'
        value={url}
        onChange={props.handleOnChange}
      />
      <input
        type='text'
        name='phone'
        value={phone}
        onChange={props.handleOnChange}
      />
      <input type='submit' value='Update' />
    </form>
  );
};

export default EditForm;
