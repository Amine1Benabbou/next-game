import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-envoiemessage',
  imports: [],
  templateUrl: './envoiemessage.html',
  styleUrl: './envoiemessage.scss',
})



export type Envoiemessage = {
  nom: string;
  prenom: string;
  objet: string;
  email?: string | null;
  telephone: string;
  message: string;
};

@Injectable({ providedIn: 'root' })
export class Envoiemessage {
  // en dev tu peux mettre: 'http://localhost:5001/<project-id>/us-central1/contact'
  private endpoint = '/api/contact';

  constructor(private http: HttpClient) {}

  sendContact(payload: ContactPayload): Observable<{ ok: true }> {
    return this.http.post<{ ok: true }>(this.endpoint, payload);
  }
}
function Component(arg0: { selector: string; imports: never[]; templateUrl: string; styleUrl: string; }) {
  throw new Error('Function not implemented.');
}

