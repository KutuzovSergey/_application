import axios from 'axios';
import { TableCellType } from '../type/typesMain';


export const createData: string = '/ru/data/v3/testmethods/docs/userdocs/create';
export const deleteData: string = '/ru/data/v3/testmethods/docs/userdocs/delete/';
export const changeData: string = '/ru/data/v3/testmethods/docs/userdocs/set/';

export async function authorizationsUser(user: string): Promise<any> {
    const URL = 'https://test.v5.pryaniky.com/ru/data/v3/testmethods/docs/login';
    const result = await axios.post(URL, user, {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return result
}

export async function authenticationUser(userToken: string): Promise<any> {
    const URL = 'https://test.v5.pryaniky.com/ru/data/v3/testmethods/docs/login';

    const result = await axios.get(URL, {
        headers: {
            'x-auth': userToken,
        }
    });

    return result
}

export async function getTableData(userToken: string): Promise<any> {
    const url: string = 'https://test.v5.pryaniky.com/ru/data/v3/testmethods/docs/userdocs/get';
    const config = {
        headers: {
            'x-auth': userToken,
        }
    };

    return axios.get(url, config)
}

export async function workingWithTableData(userToken: string, idData: string, actionUrl: string, data: TableCellType): Promise<any> {
     const url: string = 'https://test.v5.pryaniky.com/ru/data/v3/testmethods/docs/userdocs/set/';
    const config = {
        headers: {
            'x-auth': userToken,
            'Content-Type': 'application/json'
        }
    };

    return axios.post(`${url}${actionUrl}${idData}`, data, config)
}