class SessionStorage {

    getItem(key: string){
        return sessionStorage.getItem(key);
    }
    setItem(key: string, value:string){
         sessionStorage.setItem(key, value);
    }
    
    removeItem(key: string){
        sessionStorage.removeItem(key);
    }

}

export default new SessionStorage();