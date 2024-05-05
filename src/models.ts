export interface entryWatch {
  mal_id: number;
  images: images;
  title: string;
  url: string;
}
interface trailer {
  youtube_id: string;
  url: string;
  embed_url: string;
  images: images;
}
export interface FormularioProps {
  onFormSubmit: (formData: FormData) => void;
}

export interface FormData {
  genero: string;
  estado: string;
  año: string;
  tipo: string;
  ordenarPor: string;
}
export interface pagination {
  last_visible_page: number;
  current_page: number;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
  has_next_page: boolean;
}

export interface Genres {
  mal_id: number;
  name: string;
  url: string;
  count: number;
}

export interface Anime {
  mal_id: number;
  url: string;
  images: images;
  titles: titles[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: {
    from: string;
    to: string;
    prop: {
      from: { day: number; month: number; year: number };
      to: { day: number; month: number; year: number };
    };
    string: string;
  };
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: {
    day: string;
    time: string;
    timezone: string;
    string: string;
  };
  producers: string[];
  licensors: string[];
  studios: string[];
  genres: entryBasic[];
  explicit_genres: any[];
  themes: string[];
  demographics: string[];
  relations: relations[];
  streaming: streaming[];
  trailer: trailer;
}
interface relations {
  relation: string;
  entry: entryBasic[];
}
interface entryBasic {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}
interface titles {
  type: string;
  title: string;
}
interface streaming {
  name: string;
  url: string;
}
interface images {
  webp: {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
  };
  jpg: {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
  };
}

interface entryEpisode {
  mal_id: number;
  images: images;
  title: string;
  premium: boolean;
}

export interface recentEpisode {
  entry: entryWatch;
  episodes: entryEpisode[];
  region_locker: boolean;
}

export interface promo {
  entry: entryWatch;
  trailer: trailer;
}

export interface responseEpisodes {
  pagination: pagination;
  data: recentEpisode[];
}
