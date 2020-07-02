import {Character} from './Character'
import {Movie} from './Movie'
import {Planet} from './Planet'


export class ApiResponseCharacterList {
    count: number;
    next: string;
    previous: string;
    results: Array<Character>;
}

export class ApiResponseMovieList {
    count: number;
    next: string;
    previous: string;
    results: Array<Movie>;
}

export class ApiResponsePlanetList {
    count: number;
    next: string;
    previous: string;
    results: Array<Planet>;
}
