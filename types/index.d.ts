interface MovieGenres {
  id: number;
  name: string
}

export interface Movie {
  title: string;
  adult?: boolean;
  backdrop_path: string;
  id: number;
  genre_ids?: number[];
  media_type?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string|undefined;
  release_date?: string;
  vote_average?: number;
  video?: boolean;
  vote_count?: number;
  genres?: MovieGenres[];
}
