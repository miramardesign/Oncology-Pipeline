import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { MetricItem } from '../models/metric.model';

@Injectable({
  providedIn: 'root'
})
export class MetricService {

  appId = environment.api.id;
  apiUrl = environment.api.url;

  constructor(
    private http: HttpClient,
  ) { }

  addCounterMetric(metric: MetricItem) {
    metric.ApplicationId = this.appId;
    this.submitCounterMetric(metric)
      .pipe(take(1))
      .subscribe(() => {
      }, error => {
        console.log(error);
      });
  }

  addTimeSpanMetric(metric: MetricItem) {
    metric.ApplicationId = this.appId;
    this.submitTimeSpanMetric(metric)
      .pipe(take(1))
      .subscribe(() => {
      }, error => {
        console.log(error);
      });
  }

  addCounterMetricByAttribute(element, value: number = 1) {
    const bucketname = element.getAttribute('data-metric-bucketname');

    this.addCounterMetric({
      BucketName: bucketname,
      Value: value
    });
  }

  private submitCounterMetric(metrics: MetricItem): Observable<MetricItem> {
    let headers = new HttpHeaders()
      .set('Authorization', 'SYN IaS5mD');
    return this.http.post<MetricItem>(`${this.apiUrl}/Metrics/Counter`, metrics, { headers });
  }

  private submitTimeSpanMetric(metrics: MetricItem): Observable<MetricItem> {
    let headers = new HttpHeaders()
      .set('Authorization', 'SYN IaS5mD');
    return this.http.post<MetricItem>(`${this.apiUrl}/Metrics/Timespan`, metrics, { headers });
  }
}
