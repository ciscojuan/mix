import { Injectable } from '@angular/core';
//importar modelo Pelicula
import { Pelicula } from '../models/pelicula';

@Injectable()
export class PeliculaService{

    public peliculas: Pelicula[];

    constructor(){

        this.peliculas = [
            new Pelicula('Spiderman: No Way Home', 'Kevin Feige', 2022, 'https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2021/02/24/spider-man-no-way-home.png'),
            new Pelicula('Avengers: End Game', 'Kevin Feige', 2018, 'https://i0.wp.com/hipertextual.com/wp-content/uploads/2019/04/hipertextual-mejores-trailers-semana-avengers-endgame-rey-leon-godzilla-2-2019907932.jpg?fit=1600%2C900&ssl=1'),
            new Pelicula('Venom 2', 'Kevin Feige', 2015, 'https://imagenes.milenio.com/qQYUMTv9M5tjq4zhIV5cl0_selY=/958x596/https://www.milenio.com/uploads/media/2021/05/10/venom-se-estrenara-solo-en.jpg'),
            new Pelicula('Venom 2', 'Kevin Feige', 2015, 'https://imagenes.milenio.com/qQYUMTv9M5tjq4zhIV5cl0_selY=/958x596/https://www.milenio.com/uploads/media/2021/05/10/venom-se-estrenara-solo-en.jpg')
        ];
    }
    holaMundo(){
        return "Hola Mundo desde un servicio de angular";
    }

    getPeliculas(){
        return this.peliculas;
    }
}