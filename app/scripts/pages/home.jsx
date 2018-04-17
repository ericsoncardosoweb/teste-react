import React from 'react';
import ItemList from '../components/itemList.jsx';
import ItemStore from '../stores/itemStore';
import ItemActions from '../actions/itemActions';

const houses = [
  {
    'home': 'Stark',
    'date': '17/08/2017'
  },
  {
    'home': 'Lannister',
    'date': '17/08/2017'
  },
  {
    'home': 'Targaryen',
    'date': '16/08/2017'
  },
  {
    'home': 'Karstark',
    'date': '16/08/2017'
  },
  {
    'home': 'Bolton',
    'date': '15/08/2017'
  },
  {
    'home': 'Martell',
    'date': '15/08/2017'
  }
];

class Home extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      searchString: "",
      houses: [],
      loading: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      houses: houses
    });
    this.refs.search.focus();
    ItemActions.loadItems();
    console.log(this.refs.search.value);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onStatusChange(state) {
    this.setState(state);
  }

  handleChange() {
    this.setState({
      searchString: this.refs.search.value
    });
  }

  render() {
    let _items = this.state.houses;
    let search = this.state.searchString.trim().toLowerCase();


    if (search.length > 0) {
      _items = _items.filter(function (item) {
        return item.home.toLowerCase().match(search);
      });
    }

    return (
      <section className="section">
        <div className="container small">
          <input 
            type="text" 
            className="input" 
            placeholder="Pesquise por uma nota" 
            value={this.state.searchString}
            ref="search"
            onChange={this.handleChange}
          />
          <h3 className="heading light small">Notas</h3>
          <ul className="card-list">
            {_items.map(l => {
              return (
                <li className="card" key={l.home}>
                  <h4 className="card__heading">{l.home}</h4>
                  <p className="card__summary">{l.date}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    );
  }
}

export default Home;