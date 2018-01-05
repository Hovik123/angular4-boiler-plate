import {environment} from '../../../../environments/environment';
export class LocalStorageService {
    public get(key: string): any {
        return JSON.parse(localStorage.getItem(`${environment.localStorageSalt}-${key}`));
    }

    public add(key: string, data: any): void {
        localStorage.setItem(`${environment.localStorageSalt}-${key}`, JSON.stringify(data));
    }

    public remove(key: string): void {
        localStorage.removeItem(`${environment.localStorageSalt}-${key}`);
    }

    public removeAll(): void {
        localStorage.clear();
    }
}
