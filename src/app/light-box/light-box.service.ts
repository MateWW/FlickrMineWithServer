import { Injectable } from '@angular/core';
import { CommunicationService } from '../communication.service';


@Injectable()
export class LightBoxService {

  constructor( private communication:CommunicationService ) { }

}
