//@flow
import {dealsMock} from '../mock/deals.js';
import axios from 'axios';
import type {Deals} from '../types/Deals';
import type {Deal} from '../types/Deal';
const DealUrl = 'http://localhost:5000/api/deals';

export const getDealsData = () => {
    const success = ({data}: {data: Deals}) => data;
    const error = () => [];
    return axios.get(DealUrl).then(success).catch(error);
};

export const postDealData = (data: Deal) => {
    axios.post(DealUrl, data);
};

export const deleteDealData = (data: Deal) => {
    axios.delete(DealUrl, {data});
};

export const editDealData = (data: Deal) => {
    axios.put(DealUrl, data);
};

export const getDealsMock = () => dealsMock;