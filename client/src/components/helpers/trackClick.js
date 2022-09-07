import please from '../../request.js';

//ALL OF YOUR INTERACTIVE ELEMENTS SHOULD HAVE A UNIQUE ID

const originalClick = {
  widget: 'none',
  submit: function(e) {
    let clickData = {
      element: e.target.id,
      widget: this.widget,
      time: new Date()
    }
    console.log('submitting', clickData)
    please.submitClickData(clickData)
    .then(() => console.log('click recorded'))
    .catch(err => console.log(err));
  }
}

const submitOVClick = originalClick.submit.bind({widget: 'Overview'});
const submitRCClick = originalClick.submit.bind({widget: 'Related Items and Comparison'})
const submitQAClick = originalClick.submit.bind({widget: 'Questions and Answers'})
const submitRRClick = originalClick.submit.bind({widget: 'Ratings and Reviews'});

export { submitOVClick, submitRRClick, submitQAClick, submitRCClick }