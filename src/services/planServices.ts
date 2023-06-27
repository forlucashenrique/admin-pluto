import api from "./api";
import { IPlan } from "../types/IPlan";


export const getPlans = async () => {
    const response = await api.get('/plans');
    return response.data;
}

export const getPlan = async (id: number) => {
    try {
        const response = await api.get(`/plans/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const createPlan = async (plan: IPlan) => {
    try {
        const response = await api.post('/plans', plan);

        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export const updatePlan = async (plan: IPlan) => {
    try {
        const response = await api.put(`/plans/${plan.id}`, plan);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const deletePlan = async (id: number) => {
    try {
        const response = await api.delete(`/plans/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}