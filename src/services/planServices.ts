import api from "./api";
import { IPlan } from "../types/IPlan";


export const getPlans = async () => {
    const response = await api.get('/plans');
    return response.data;
}

export const createPlan = async (plan: IPlan) => {
    try {
        const response = await api.post('/plans', plan);
        console.log(response.data);
        return response.data;
    } catch(error) {
        console.log(error)
    }
    
}