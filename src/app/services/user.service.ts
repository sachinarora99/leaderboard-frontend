import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { User } from '../models/user';
import { ClaimHistory } from '../models/history';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'https://leaderboard-backend-6ggh.onrender.com/api/users';

  constructor(@Inject(HttpClient) private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}`);
  }

  addUser(name: string): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}`, { name });
  }

  claimPoints(userId: string): Observable<{ user: User; randomPoints: number }> {
    return this.http.post<{ user: User; randomPoints: number }>(
      `${this.baseUrl}/claim/${userId}`, {}
    );
  }

  getLeaderboard(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/leaderboard`);
  }

  getHistory(): Observable<ClaimHistory[]> {
    return this.http.get<ClaimHistory[]>(`${this.baseUrl}/history`);
  }
}
