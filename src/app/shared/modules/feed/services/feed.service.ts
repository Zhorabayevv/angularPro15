import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";

import { GetFeedResponseInterface } from 'src/app/shared/modules/feed/types/getFeedResponse.interface';

@Injectable()
export class FeedService {
  constructor(private http: HttpClient) {}
  
  getFeed(url: string): Observable<GetFeedResponseInterface> {
    const fullUrl = 'https://conduit.productionready.io/api' + url;
    return this.http.get<GetFeedResponseInterface>(fullUrl);
  }
}
