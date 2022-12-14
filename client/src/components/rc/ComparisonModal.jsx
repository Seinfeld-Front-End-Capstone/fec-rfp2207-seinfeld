import React, { useState, useEffect } from 'react';

const ComparisonModal = ({ toggle, overviewItem, relatedItem, relatedPrice, ovPrice }) => {

  //this is a pop-up window that compares the currently viewed item with the related item

  const handleClick = () => {
    toggle(false);
  }

  const show = toggle ? "RC_show" : "";

  return (
    <div
    className={"RC_modal" + show}>
      <div
      className="RC_modal_content">
        <i
        className="RC_close fa-solid fa-circle-xmark"
        onClick={handleClick}></i>
        <table
        className="RC_modal_table">
          <thead>
            <tr>
              <th
              className="RC_modal_th"
              colSpan="3">
                Comparing
              </th>
            </tr>
            <tr>
              <th
              className="RC_modal_th">
                {overviewItem.name}
              </th>
              <th
              className="RC_modal_th">
              </th>
              <th
              className="RC_modal_th">
                {relatedItem.name}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
              className="RC_modal_td">
                {overviewItem.category}
              </td>
              <td
              className="RC_modal_td">
                Category
              </td>
              <td
              className="RC_modal_td">
                {relatedItem.category}
              </td>
            </tr>
            <tr>
              <td
              className="RC_modal_td">
                ${ovPrice}
              </td>
              <td
              className="RC_modal_td">
                Price
              </td>
              <td
              className="RC_modal_td">
                ${relatedPrice}
              </td>
            </tr>
            <tr>
              <td
              className="RC_modal_td">
                {overviewItem.slogan}
              </td>
              <td
              className="RC_modal_td">
                Slogan
              </td>
              <td
              className="RC_modal_td">
                {relatedItem.slogan}
              </td>
            </tr>
            <tr>
              <td
              className="RC_modal_td">
                {overviewItem.description}
              </td>
              <td
              className="RC_modal_td">
                Description
              </td>
              <td
              className="RC_modal_td">
                {relatedItem.description}
              </td>
            </tr>
              {overviewItem.features.map((feat, index) => {
                return (
                  <tr
                  key={index}>
                    <td
                    className="RC_modal_td">
                      {feat.feature}: {feat.value}
                    </td>
                    <td
                    className="RC_modal_td">
                      Feature
                    </td>
                    <td
                    className="RC_modal_td">
                      {relatedItem.features[index].feature}: {relatedItem.features[index].value}
                    </td>
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