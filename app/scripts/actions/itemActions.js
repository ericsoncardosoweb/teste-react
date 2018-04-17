const itemsInital = [
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
import Reflux from 'reflux';

const ItemActions = Reflux.createActions({
  'loadItems': { children: ['completed', 'failed'] }
});

ItemActions.loadItems.listen(function () {
  // make your api call/ async stuff here
  // we use setTimeout for faking async behaviour here
  setTimeout(() => {
    const items = itemsInital;
    this.completed(items);

    // on error
    // this.failed('an error occured');
  }, 500);
});

export default ItemActions;