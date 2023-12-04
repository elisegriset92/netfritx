import { setActivePinia, createPinia } from 'pinia';
import { describe, it, expect, beforeEach } from 'vitest';
import { useMovieStore } from './movie';


describe('Movie Store', () => {
  let store: any = null;

  beforeEach(() => {
    setActivePinia(createPinia());
    store = useMovieStore();
  })

  const movies = [{
    "adult": false,
    "backdrop_path": "/9PqD3wSIjntyJDBzMNuxuKHwpUD.jpg",
    "belongs_to_collection": null,
    "budget": 0,
    "genres": [
      {
        "id": 16,
        "name": "Animation"
      },
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 10751,
        "name": "Family"
      }
    ],
    "homepage": "https://www.netflix.com/title/81218917",
    "id": 1075794,
    "imdb_id": "tt5755238",
    "original_language": "en",
    "original_title": "Leo",
    "overview": "Jaded 74-year-old lizard Leo has been stuck in the same Florida classroom for decades with his terrarium-mate turtle. When he learns he only has one year left to live, he plans to escape to experience life on the outside but instead gets caught up in the problems of his anxious students — including an impossibly mean substitute teacher.",
    "popularity": 2210.105,
    "poster_path": "/pD6sL4vntUOXHmuvJPPZAgvyfd9.jpg",
    "production_companies": [
      {
        "id": 878,
        "logo_path": "/e2AZdsQdkhN0qJhoN4TMYiVPLyb.png",
        "name": "Happy Madison Productions",
        "origin_country": "US"
      },
      {
        "id": 8089,
        "logo_path": "/kEUAzsG2hZcCV7rmSCozgLhGWaa.png",
        "name": "Animal Logic",
        "origin_country": "AU"
      }
    ],
    "production_countries": [
      {
        "iso_3166_1": "AU",
        "name": "Australia"
      },
      {
        "iso_3166_1": "US",
        "name": "United States of America"
      }
    ],
    "release_date": "2023-11-17",
    "revenue": 0,
    "runtime": 102,
    "spoken_languages": [
      {
        "english_name": "English",
        "iso_639_1": "en",
        "name": "English"
      }
    ],
    "status": "Released",
    "tagline": "Breaking out this November.",
    "title": "Leo",
    "video": false,
    "vote_average": 7.569,
    "vote_count": 377
  }, {
    "adult": false,
    "backdrop_path": "/13QFKJa7ZPY3VN0L6sxKuNoLHFf.jpg",
    "belongs_to_collection": null,
    "budget": 13000000,
    "genres": [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "homepage": "https://dev-ottflix.pantheonsite.io/animal",
    "id": 781732,
    "imdb_id": "tt13751694",
    "original_language": "hi",
    "original_title": "Animal",
    "overview": "A son undergoes a remarkable transformation as the bond with his father begins to fracture, and he becomes consumed by a quest for vengeance.",
    "popularity": 152.243,
    "poster_path": "/hr9rjR3J0xBBKmlJ4n3gHId9ccx.jpg",
    "production_companies": [
      {
        "id": 3522,
        "logo_path": "/d3u51JgEP5KwPfxS13ocqvtzZeX.png",
        "name": "T-Series",
        "origin_country": "IN"
      },
      {
        "id": 35064,
        "logo_path": "/mAqgOSWkUTQ3EMYBuy6pMRTFOmQ.png",
        "name": "Cine1 Studios",
        "origin_country": "IN"
      },
      {
        "id": 94245,
        "logo_path": null,
        "name": "Bhadrakali Pictures",
        "origin_country": "IN"
      }
    ],
    "production_countries": [
      {
        "iso_3166_1": "IN",
        "name": "India"
      }
    ],
    "release_date": "2023-12-01",
    "revenue": 0,
    "runtime": 201,
    "spoken_languages": [
      {
        "english_name": "English",
        "iso_639_1": "en",
        "name": "English"
      },
      {
        "english_name": "Hindi",
        "iso_639_1": "hi",
        "name": "हिन्दी"
      },
      {
        "english_name": "Telugu",
        "iso_639_1": "te",
        "name": "తెలుగు"
      }
    ],
    "status": "Released",
    "tagline": "A father-son bond carved in blood",
    "title": "Animal",
    "video": false,
    "vote_average": 6.3,
    "vote_count": 7
  }]

  it('setMovies', async () => {
    store.setMovies(movies);
    expect(store.movies).toStrictEqual(movies)
  })
  it('setMovieDetails', async () => {
    store.setMovieDetails(movies[0]);
    expect(store.movieDetails).toStrictEqual(movies[0])
  })
  it('setHomePageMovies', async () => {
    store.setHomePageMovies(movies[0]);
    store.setHomePageMovies(movies[1]);
    expect(store.trendingMovies).toStrictEqual(movies)
  })
  it('setTotalPages', async () => {
    store.setTotalPages(145);
    expect(store.totalPages).toStrictEqual(145)
  })
  it('displaySearchBar', async () => {
    store.displaySearchBar(true);
    expect(store.showSearchBar).toStrictEqual(true)
    store.displaySearchBar(false);
    expect(store.showSearchBar).toStrictEqual(false)
  })
  it('setLoader', async () => {
    store.setLoader(true);
    expect(store.loaderMovie).toStrictEqual(true)
    store.setLoader(false);
    expect(store.loaderMovie).toStrictEqual(false)
  })
  it('displayFullVideo', async () => {
    store.displayFullVideo(true);
    expect(store.showFullVideo).toStrictEqual(true)
    store.displayFullVideo(false);
    expect(store.showFullVideo).toStrictEqual(false)
  })
  it('setFullVideo', async () => {
    const arg = [{
      "iso_639_1": "en",
      "iso_3166_1": "US",
      "name": "Yours to Own Promo",
      "key": "UdFeVo0cODs",
      "site": "YouTube",
      "size": 1080,
      "type": "Teaser",
      "official": true,
      "published_at": "2023-10-17T13:00:24.000Z",
      "id": "652e887bea84c7010c1d8436"
    }]
    store.setFullVideo(arg);
    expect(store.videoOnFullScreen).toStrictEqual('https://www.youtube.com/embed/' + arg[0].key)
  })
  it('setHeartedMovies', async () => {
    store.setHeartedMovies(movies[0]);
    expect(store.heartedMovies).toStrictEqual([movies[0]])
    store.setHeartedMovies(movies[1]);
    expect(store.heartedMovies).toStrictEqual(movies)
    store.setHeartedMovies(movies[1]);
    expect(store.heartedMovies).toStrictEqual([movies[0]])
  })
})
