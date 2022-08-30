import React, { useState, useEffect } from 'react';
import request from '../../request.js';

const ComparisonModal = ({ toggle, overviewItem, relatedItem, relatedPrice, ovPrice }) => {

  //this is a pop-up window that compares the currently viewed item with the related item


  const handleClick = () => {
    toggle(false);
  }

  console.log('related item:', relatedItem);
  console.log('overview item:', overviewItem);

  const show = toggle ? "RC_show" : "";

  return (
    <div className={"RC_modal" + show}>
      <div className="RC_modal_content">
        <span className="RC_close" onClick={handleClick}>x</span>
        <table className="RC_modal_table">
          <thead>
            <tr>
              <th className="RC_modal_td" colSpan="3">Item Comparison</th>
            </tr>
            <tr>
              <th className="RC_modal_td">{overviewItem.name}</th>
              <th className="RC_modal_td"></th>
              <th className="RC_modal_td">{relatedItem.name}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="RC_modal_td">${ovPrice}</td>
              <td className="RC_modal_td">Price</td>
              <td className="RC_modal_td">${relatedPrice}</td>
            </tr>
              {overviewItem.features.map((feat, index) => {
                return (
                  <tr key={index}>
                    <td className="RC_modal_td">{feat.feature}: {feat.value}</td>
                    <td className="RC_modal_td">Feature</td>
                    <td className="RC_modal_td">{relatedItem.features[index].feature}: {relatedItem.features[index].value}</td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ComparisonModal;