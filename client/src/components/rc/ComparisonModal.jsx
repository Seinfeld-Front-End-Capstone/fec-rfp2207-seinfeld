import React from 'react';

const ComparisonModal = () => {
  //this is a pop-up window that compares the currently viewed item with the related item

  return (
    <div className="modal">
   <div className="modal_content">
     <span className="close">x</span>
     <p></p>
     <table>
    <thead>
        <tr>
            <th colSpan="3">Item Comparison</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>The table body</td>
            <td>with three </td>
            <td>columns</td>
        </tr>
    </tbody>
</table>
   </div>
</div>
  )
}

export default ComparisonModal;