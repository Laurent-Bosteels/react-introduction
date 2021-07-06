import React from 'react';

/* COMPONENT IMPORT */
import ListHeader from './ListHeader';
import ListItem from './ListItem';

function List () {
    return ( 
      <section className="list">
        <ListHeader />
        <ListItem />
      </section>
    );
  };

  export default List;
  