import RequestServer from './RequestServer';
import { dataProcessing } from '../utils/fileCheck';
import { GetAllListType, ResultAllListType } from '../type/typeAP/typesGetCoins';
import { DataObjType, DataProcessingType } from '../type/typeUtils/typesFileCheck';

export async function getAllList(): Promise<GetAllListType> {
    const api_key: string = '?api_key=92c340e1dee1b05551b8fe09fb59f2bc6ba4715e3ec434f226370c7654de8b38';
    const url: string = 'https://min-api.cryptocompare.com/data/blockchain/list';
    const get: string = 'GET';

    const result: ResultAllListType = await RequestServer.getData(get, url, api_key);
    
    if (result.Data) {
        return Object.keys(result.Data)
    } else {
        return ['0XBTC', '1ST', '1WO', 'AAC', 'ABCC', 'ABT', 'ABYSS', 'ACCN', 'ACE', 'ADA', 'ADB', 'ADH', 'ADI', 'ADL', 'ADT', 'ADX', 'AE', 'AEN', 'AERGO', 'AGI', 'AGVC', 'AID', 'AIDOC', 'AIT', 'AIX', 'ALIS', 'ALX', 'AMB', 'AMLT', 'AMM', 'AMN', 'AMO', 'ANKR', 'ANT', 'AOA', 'APIS', 'APPC', 'ARAW', 'ARBT', 'ARCT', 'ARN', 'ART', 'ARY', 'AST', 'ASTO', 'ATL', 'ATM', 'ATMI', 'ATS', 'AUC', 'AVH', 'AVT', 'AWC', 'AXPR', 'B2B', 'BAAS', 'BANCA', 'BAT', 'BAX', 'BBC', 'BBO', 'BCAP', 'BCDN', 'BCDT', 'BCH', 'BCPT', 'BDG', 'BEAT', 'BEE', 'BELA', 'BERRY', 'BETHER', 'BETR', 'BEZ', 'BFT', 'BGG', 'BIO', 'BITX', 'BIX', 'BKX', 'BLNM', 'BLOC', 'BLT', 'BLZ', 'BMC', 'BMH', 'BMX', 'BNK', 'BNN', 'BNT', 'BNTY', 'BOB', 'BOE', 'BOLT', 'BOLTT', 'BON', 'BOT', 'BOUTS', 'BOX', 'BPT',]
    }
}

export async function  getListOnPage(coins: string[]): Promise<DataProcessingType | void> {
    if (typeof coins === 'undefined' || 
            !Array.isArray(coins) || 
            !coins.length) {
        coins = ['RMESH', 'ADA', 'SAL', 'ATMI', 'BAAS', 'BCDT', 'BCH', 'BCPT', 'BDG'];
    }

    const api_key: string = '?api_key=92c340e1dee1b05551b8fe09fb59f2bc6ba4715e3ec434f226370c7654de8b38';
    const parameters: string = `?fsyms=${coins.join()}&tsyms=USD`;
    const url: string = 'https://min-api.cryptocompare.com/data/pricemultifull';
    const get: string = 'GET';
     
    const result: DataObjType = await RequestServer.getData(get, url, parameters, api_key);

    return dataProcessing(result)
}

export async function getChart(coin: string[]): Promise<DataProcessingType>{
    const url: string = 'https://min-api.cryptocompare.com/data/v2/histoday';
    const parameters: string = `?fsym=${coin.join()}&tsym=USD&limit=10`;
    const api_key: string = '?api_key=92c340e1dee1b05551b8fe09fb59f2bc6ba4715e3ec434f226370c7654de8b38';
    const get: string = 'GET';
    let result = await RequestServer.getData(get, url, parameters, api_key);

    return result
}

// https://min-api.cryptocompare.com/data/v2/histoday?fsym=BIX&tsym=USD&limit=10
// const api_key = '?api_key=92c340e1dee1b05551b8fe09fb59f2bc6ba4715e3ec434f226370c7654de8b38';
// // const url = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,AAC,ADB,AIDOC,0XBTC&tsyms=USD,EUR'; 

// https://min-api.cryptocompare.com/data/v2/histoday?fsym=AAC&tsym=USD&limit=10?api_key=92c340e1dee1b05551b8fe09fb59f2bc6ba4715e3ec434f226370c7654de8b38