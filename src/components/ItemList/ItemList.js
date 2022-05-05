import React from 'react';
import List from '@material-ui/core/List';
import Item from '../Item/Item';

const ItemList = ({ todoItems, onClickDone, onClickDelete, id }) => (<List>
  {todoItems.map(item => <div key={item.id}>
    <Item
      value={item.value}
      isDone={item.isDone}
      id={item.id}
      onClickDone={onClickDone}
      onClickDelete={onClickDelete}
    />
  </div>)}
</List>);

export default ItemList;