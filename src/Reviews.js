import React from 'react';
import './Reviews.css';


function Reviews(){
  return(
    <div className="m-2 text-left">
      <div className="review-box">
        <i>Absolutely love my new Boosted Board - Great customer experience, timely shipping, and unbeatable price. Thanks, FlowState!</i><br></br>
        <b>-Sam Neil, Denver, CO</b>
      </div>
      <div className="review-box">
        <i>Couldn't be happier with my new Onewheel Pint - and it only took 5 days to get here! So excited. </i><br></br>
        <b>-Michael Horse, Twin Peaks, WA</b>
      </div>
      <div className="review-box">
        <i>Got a defective Ownboard, and FlowState's customer assistance promptly sent me a replacement. I was riding within a week.</i><br></br>
        <b>-Tony Danza, Detroit, MI</b>
      </div>
      <div className="review-box">
        <i>Bought a OneWheel for my entire water polo club. Everyone got theirs within a day of one another. Great customer support, great prices. Unbeatable.</i><br></br>
        <b>-Dougie Jones, Las Vegas, NV</b>
      </div>
    </div>
  )
}

export default Reviews