import p5royal from './assets/p5royal.jpg';
import p4golden from './assets/p4golden.jpg';
import p3reload from './assets/p3reload.jpg';
import drakengard1 from './assets/drakengard1.jpg';
import drakengard2 from './assets/drakengard2.jpg';
import drakengard3 from './assets/drakengard3.jpg';
import nierAutomata from './assets/nier-automata.jpg';
import nierReplicant from './assets/nier-replicant.jpg';

export interface Game {
  id: number;
  title: string;
  genre: string;
  platform: string;
  releaseDate: string;
  rating: number;
  imageUrl: string;
}

export const games: Game[] = [
  {
    id: 1,
    title: 'Persona 5 Royal',
    genre: 'JRPG',
    platform: 'PS4, PC, Switch',
    releaseDate: '2019-10-31',
    rating: 9.5,
    imageUrl: p5royal,
  },
  {
    id: 2,
    title: 'Persona 4 Golden',
    genre: 'JRPG',
    platform: 'PS Vita, PC, Switch',
    releaseDate: '2012-06-14',
    rating: 9.0,
    imageUrl: p4golden,
  },
  {
    id: 3,
    title: 'Persona 3 Reload',
    genre: 'JRPG',
    platform: 'PS4, PS5, PC, Xbox',
    releaseDate: '2024-02-02',
    rating: 8.8,
    imageUrl: p3reload,
  },
  {
    id: 4,
    title: 'Drakengard',
    genre: 'Action RPG',
    platform: 'PS2',
    releaseDate: '2003-09-11',
    rating: 7.0,
    imageUrl: drakengard1,
  },
  {
    id: 5,
    title: 'Drakengard 2',
    genre: 'Action RPG',
    platform: 'PS2',
    releaseDate: '2005-06-16',
    rating: 6.8,
    imageUrl: drakengard2,
  },
  {
    id: 6,
    title: 'Drakengard 3',
    genre: 'Action RPG',
    platform: 'PS3',
    releaseDate: '2013-12-19',
    rating: 7.2,
    imageUrl: drakengard3,
  },
  {
    id: 7,
    title: 'NieR: Automata',
    genre: 'Action RPG',
    platform: 'PS4, Xbox, PC, Switch',
    releaseDate: '2017-02-23',
    rating: 9.0,
    imageUrl: nierAutomata,
  },
  {
    id: 8,
    title: 'NieR Replicant ver.1.22474487139...',
    genre: 'Action RPG',
    platform: 'PS4, Xbox, PC',
    releaseDate: '2021-04-22',
    rating: 8.5,
    imageUrl: nierReplicant,
  },
];
