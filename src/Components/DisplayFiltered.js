import React from 'react';

const DisplayFiltered = props => {
  console.log('these asre props', props);

  return (
    <div className='filterBody'>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <img className='img1' src={props.filtered.image} />
          </div>

          <div className='col-6'>
            <h2>{props.filtered.name}</h2>
            <p>{props.filtered.address}</p>
            <p>{props.filtered.theme}</p>
            <a href={props.filtered.url}>
              <p>{props.filtered.url}</p>
            </a>
            <p>{props.filtered.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayFiltered;
