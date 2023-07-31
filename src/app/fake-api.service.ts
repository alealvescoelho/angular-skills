import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService implements InMemoryDbService {

  constructor() { }

  createDb() {

    let skills = [
      { id: 1, name: 'Communication', description: 'A nível organizacional, o desenvolvimento contínuo de distintas formas de atuação apresenta tendências no sentido de aprovar a manutenção das posturas dos órgãos dirigentes com relação às suas atribuições.', pic: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', likes: 1 },
      { id: 2, name: 'Coding', description: 'O desenvolvimento contínuo de distintas formas de atuação dos órgãos dirigentes com relação às suas atribuições atuam diretamente a nível organizacional.', pic: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', likes: 1 },
      { id: 3, name: 'Time Management', description: 'No sentido de aprovar a manutenção das posturas distintas dos órgãos dirigentes com relação às suas atribuições distintas formas de atuação.', pic: 'https://images.pexels.com/photos/2977547/pexels-photo-2977547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', likes: 1 },
      { id: 4, name: 'Problem Solving', description: 'Distintas autuações distintas no sentido de aprovar as atribuições.', pic: 'https://images.pexels.com/photos/19677/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', likes: 1 },
      { id: 5, name: 'UX Design', description: 'An IT professional should be able to accurately assess how long a project should take, and then be able to stick to those timelines. He or she should also be able to help an entire team manage their time, on a daily, weekly, monthly, and project basis.', pic: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', likes: 1 },
      { id: 6, name: 'Collaboration', description: 'IT professionals often have to provide tech solutions for people who aren’t as savvy. They have to demonstrate leadership at all levels of projects, and with many different groups.', pic: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', likes: 1 }
    ];

    return { skills };
  }
}
