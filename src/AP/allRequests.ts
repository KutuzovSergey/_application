import axios from 'axios';
import { useSelector } from 'react-redux';
import { UserDataType } from '../type/typesHooks.ts';
import RequestServer from './RequestServer.ts';
import { RootState } from '../index.tsx';

export async function registrUser(user: string): Promise<any> {
    const URL = 'https://test.v5.pryaniky.com/ru/data/v3/testmethods/docs/login';
    axios.post(URL, user, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (respons) {
        console.log(respons.data.data.token);
        return respons.data
            })
            .catch(function (error) {
                console.log(error);
                return ''
            });

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

    axios.get(url, {
        headers: {
            'X-Auth-Token': userToken,
        }
    }).then(function (respons) {
        console.log(respons.data);
        return respons.data
            })
            .catch(function (error) {
                console.log(error);
                return ''
            });
}