import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CloudinaryService {
    
    constructor(private _http:Http) {
        
    }
}