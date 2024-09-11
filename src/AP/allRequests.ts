import axios from 'axios';
import { UserDataType } from '../type/typesHooks.ts';
import RequestServer from './RequestServer.ts';

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
            'X-Auth-Token': userToken,
        }
    });

    return result
}

export async function getUser(user: UserDataType): Promise<any> {
    const url: string = 'https://test.v5.pryaniky.com';
    const get: string = 'POST';
    const param: string = '/ru/data/v3/testmethods/docs/login';
    const json = JSON.stringify(user);

    const result: any = await RequestServer.sendRequest(get, url, param, json);
    
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