import {environment} from '../../../../environments/environment';
export class SessionStorageService {
    public get(key: string): any {
        return JSON.parse(sessionStorage.getItem(`${environment.sessionStorageSalt}-${key}`));
    }

    public add(key: string, data: any): void {
        sessionStorage.setItem(`${environment.sessionStorageSalt}-${key}`, JSON.stringify(data));
    }

    public remove(key: string): void {
        sessionStorage.removeItem(`${environment.sessionStorageSalt}-${key}`);
    }

    public removeAll(): void {
        sessionStorage.clear();
    }
}
