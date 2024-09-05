// import axios from 'axios';

const serverReques = (method: string, url: string, param='', json=''): Promise<any> => {
    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();

        xhr.open(method, url+param);

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
        xhr.send(json);
    })
}

export default class RequestServer {

    static async sendRequest(method: string, url: string, param='', json=''){
        return serverReques(method, url, param='', json='')
            .then(data => data)
            .catch(err => err)
    }
}