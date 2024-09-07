import { UserDataType } from '../type/typesHooks.ts';
import RequestServer from './RequestServer.ts';
import axios from 'axios';


export async function registrUser(user: string): Promise<any> {
    const URL = 'https://test.v5.pryaniky.com/ru/data/v3/testmethods/docs/login';
    console.log(user);
    axios.post(URL, user);
    // const api = axios.create({
    //     baseURL: 'https://test.v5.pryaniky.com/ru/data/v3/testmethods/docs/login';
    // })
    // const url: string = 'https://test.v5.pryaniky.com/ru/data/v3/testmethods/docs/login';
    // const get: string = 'POST';
    // const param: string = '/ru/data/v3/testmethods/docs/login';
    // const json = user;

    // const result: any = await RequestServer.sendRequest(get, url, param, json);
    
    return axios.post(URL, user)
}

export async function getUser(user: UserDataType): Promise<any> {
    const url: string = 'https://test.v5.pryaniky.com';
    const get: string = 'POST';
    const param: string = '/ru/data/v3/testmethods/docs/login';
    const json = JSON.stringify(user);

    const result: any = await RequestServer.sendRequest(get, url, param, json);
    
    return result
}

export async function getTableData(): Promise<any> {
    const url: string = 'https://test.v5.pryaniky.com/ru/data/v3/testmethods/docs/userdocs/get';
    const token: string = 'supersecrettoken_for_user13';
    const result = axios.get(url, {
        headers: {
            'X-Auth-Token': token,
        }
    })

    // const url: string = 'https://test.v5.pryaniky.com';
    // const get: string = 'GET';
    // const param: string = '/ru/data/v3/testmethods/docs/userdocs/get';

    // const result: any = await RequestServer.sendRequest(get, url, param);
    
    return result
}