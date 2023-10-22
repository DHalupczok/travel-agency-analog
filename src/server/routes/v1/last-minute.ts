import {defineEventHandler} from "h3";

export default defineEventHandler((event) => {
  const lastMinuteOffers = [
    {location: "Egypt", price: 4500},
    {location: "Greece", price: 4000},
    {location: "Bulgaria", price: 4500},
    {location: "Romania", price: 4500},
    {location: "Turkey", price: 4500},
    {location: "Spain", price: 4500},
    {location: "Portugal", price: 4500},
  ]




  event.node.res.setHeader('content-type', 'application/json');
  return lastMinuteOffers;
});
