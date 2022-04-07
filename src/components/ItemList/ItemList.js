import React from 'react';
import List from '@material-ui/core/List';
import Item from '../Item/Item';

const ItemList = ({ todoItems, onClickDone }) => (<List>
  {todoItems.map(item => <div key={item.value}>
    <Item 
      value={item.value}
      isDone={item.isDone}
      id={item.id}
      onClickDone={onClickDone}
    />
  </div>)}
</List>);

export default ItemList;