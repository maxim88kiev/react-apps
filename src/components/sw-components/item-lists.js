import React from 'react';
import ItemList from '../item-list';
import { withData } from '../hoc-helpers';
import SwapService from '../../services/swapi-service';

const swapiService = new SwapService();

const {
    getAllPeople,
    getAllStarships,
    getAllPlanets
} = swapiService;


const withChildFunction = (Wrapped, fn) => {
    return (props) => ( <ItemList {...props}>{({ name }) => <span>{name}</span> }</ItemList> )
};


const ListWithChildren = withChildFunction( ItemList, ({ name }) => <span>{name}</span> );

const PersonList = withData(ListWithChildren, getAllPeople);

const PlanetList = withData(ListWithChildren, getAllPlanets);

const StarshipList = withData(ListWithChildren, getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
};


