import {reactLocalStorage} from 'reactjs-localstorage';
class LocalStorageHelper {

    // Set Get User Token
    static setToken(Token){
        reactLocalStorage.set("Token",Token)
    }
    static getToken(){
        return  reactLocalStorage.get("Token")
    }
    static storageClear(){
        reactLocalStorage.clear();
    }
}
export default LocalStorageHelper;