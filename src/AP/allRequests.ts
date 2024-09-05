import { UserDataType } from '../type/typesHooks.ts';
import RequestServer from './RequestServer.ts';

export async function getUser(user: UserDataType): Promise<any> {
    const url: string = 'https://test.v5.pryaniky.com';
    const get: string = 'POST';
    const param: string = '/ru/data/v3/testmethods/docs/login';
    const json = JSON.stringify(user);

    const result: any = await RequestServer.sendRequest(get, url, param, json);
    
    return result
}