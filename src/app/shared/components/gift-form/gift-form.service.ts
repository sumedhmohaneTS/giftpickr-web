// Angular modules
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios';

@Injectable()
export class GiftFormService {
    domainUrl: string;
    private default: CreateAxiosDefaults = {
        withCredentials: true,
        timeout: 990000,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    };

    // NOTE Instances
    private api: AxiosInstance = axios.create({
        baseURL: environment.apiBaseUrl,
        ...this.default,
    });

    constructor(private http: HttpClient) {
        this.domainUrl = environment.apiBaseUrl;
    }

    getRecommendedProducts(data: any) {
        return this.api.post(`${this.domainUrl}external/products/recommendation`, data);
    }
}
