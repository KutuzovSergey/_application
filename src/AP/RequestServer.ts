import { DataObjType } from "../type/typeUtils/typesFileCheck";

const serviceList = (method: string, url: string, param: string, apiKey: string): Promise<DataObjType> =>{
    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();

        xhr.open(method, url+param+apiKey);

        xhr.responseType = 'json';

        xhr.onload = () => {
            if(xhr.status >= 400){
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        }

        xhr.onerror = () => {
            reject(xhr.response);
        }
        xhr.send();
    })
}

export default class CurrencesService {

    static async getData(method: string, url: string, api_key: string, param=''){
        return serviceList(method, url, api_key, param='')
            .then(data => data)
            .catch(err => err)
    }
}