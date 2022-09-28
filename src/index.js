import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { stateControl, feed, blueFood, hydrate, superWater } from './plant.js';

$(document).ready(function() {
 
  $('#feed').click(function() {
    const newState = stateControl(feed);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });

  $('#feed-blue').click(function() {
    const newState = stateControl(blueFood);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });

  $('#hydrate').click(function() {
    const newState = stateControl(hydrate);
    $('#water-value').text(`Water: ${newState.water}`);
  });

  $('#super-hydrate').click(function() {
    const newState = stateControl(superWater);
    $('#water-value').text(`Water: ${newState.water}`);
  });


  $('#show-state').click(function() {
  
    const currentState = stateControl();
    $('#soil-value').text(`Soily: ${currentState.soil}`);
  });

  $('#show-state').click(function() {
  
    const currentState = stateControl();
    $('#water-value').text(`Watery: ${currentState.water}`);
  });
});