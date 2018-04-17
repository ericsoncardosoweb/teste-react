import React from 'react';

const ItemList = (props) => {
  let items = props.houses.map(item => <li className="card" key={ item.home }>
      <h4 className="card__heading">{item.home}</h4>
      <p className="card__summary">{item.date}</p>
    </li>),
      loading = props.loading ? <div className="loading">Carregando...</div> : '';

    return (
      <div>
        {loading}
        <ul className="card-list">
          {items}
        </ul>
      </div>
    );                               
};

ItemList.propTypes = {
  loading : React.PropTypes.bool,
  items : React.PropTypes.array
}

export default ItemList;