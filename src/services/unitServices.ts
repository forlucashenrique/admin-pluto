import api from "./api";
import { IUnit } from "../types/IUnit";


export const getUnits = async () => {
    const response = await api.get('/units');
    return response.data;
}

export const getUnit = async (id: number) => {
    try {
        const response = await api.get(`/units/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const createUnit = async (unit: IUnit) => {
    try {
        const response = await api.post('/units', unit);

        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const updateUnit = async (unit: IUnit) => {
    try {
        const response = await api.put(`/units/${unit.id}`, unit);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const deleteUnit = async (id: number) => {
    try {
        const response = await api.delete(`/units/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}