//@flow
import {dealsMock} from '../mock/deals.js';
import axios from 'axios';
import type {Deals} from '../types/Deals';
const coffeeUrl = 'http://localhost:5000/api/deals';

export const getDealsData = () => {
    const success = ({data}: {data: Deals}) => {
        console.log(data);
        return data;
    };
    const error = () => [];
    return axios.get(coffeeUrl).then(success).catch(error);
};

export const getDealsMock = () => dealsMock;