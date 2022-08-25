import React from 'react';
import Overview from './overview/Overview.jsx';
import RelatedList from './rc/RelatedList.jsx';

export default () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Overview/>
      <RelatedList />
    </div>
  )
}