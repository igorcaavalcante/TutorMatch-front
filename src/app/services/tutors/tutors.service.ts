import { Injectable } from "@angular/core";
import { DefaultResponse, Api } from "../Api";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class TutorsService {

    constructor(private http: HttpClient) { }

    public post(name: string, city: string): Promise<DefaultResponse> {
        return new Promise((resolve) => {
            this.http.post(Api.url + "tutors", { name, city }, { headers: Api.options })
                .subscribe(
                    (result) => {
                        resolve({ success: true, result });
                    },
                    (error) => {
                        resolve({ error });
                    },
                );
        });
    }

    public get(
        filters?: {
            start?: number,
            limit?: number,
        }
    ): Promise<DefaultResponse> {
        return new Promise((resolve) => {

            let url = `${Api.url}tutors`;
            if (filters) {
                url += "?";
            }
            url += filters.start ? `start=${filters.start}&` : "";
            url += filters.limit ? `limit=${filters.limit}` : "";

            this.http.get(url, { headers: Api.options })
                .subscribe(
                    (result) => {
                        resolve({ success: true, result });
                    },
                    (error) => {
                        resolve({ error });
                    },
                );
        });
    }

    public getId(id: string | number): Promise<DefaultResponse> {
        return new Promise((resolve) => {
            this.http.get(`${Api.url}tutors/${id}`, { headers: Api.options })
                .subscribe(
                    (result) => {
                        resolve({ success: true, result });
                    },
                    (error) => {
                        resolve({ error });
                    },
                );
        });
    }
}
