export interface IGameMechanic {
  id: string;
  name: string;
  url: string;
}

export interface IGameCategory {
  id: string;
  url: string;
}

export interface IGamePriceHistory {
  country: string;
  date: Date;
  price: number;
  isLow: boolean;
}

export interface IGameImages {
  large: string;
  medium: string;
  original: string;
  small: string;
  thumb: string;
}

interface IGameMsrps {
  country: string;
  price: number;
}

interface IGamePublisher {
  id: string;
  game: string;
  url: string;
}

export default interface IGame {
  active: boolean;
  amazon_rank: number;
  average_learning_complexity: number;
  average_strategy_complexity: number;
  average_user_rating: number;
  comment_count: number;
  commentary: string;
  id: string;
  faq: string;
  handle: string;
  historical_low_prices: IGamePriceHistory[];
  images: IGameImages;
  is_historical_low: boolean;
  links: number;
  listing_clicks: number;
  lists: number;
  matches_specs?: null;
  mentions: number;
  name: string;
  names: string[];
  min_players: number;
  max_players: number;
  min_playtime: number;
  max_playtime: number;
  min_age: number;
  description: string;
  description_preview: string;
  image_url: string;
  msrps: IGameMsrps[];
  msrp: number;
  discount: number;
  mechanics: IGameMechanic[];
  categories: IGameCategory[];
  designers: string[];
  developers: string[];
  artists: string[];
  reddit_all_time_count?: number;
  reddit_week_count?: number;
  reddit_day_count?: number;
  num_distributors: number;
  num_user_complexity_votes: number;
  num_user_ratings: number;
  official_url: null | string;
  plays: number;
  price: string;
  price_au: string;
  price_ca: string;
  price_text: string;
  price_uk: string;
  primary_designer: IGamePublisher;
  primary_publisher: IGamePublisher;
  publishers: IGamePublisher[];
  rank: number;
  related_to: string[];
  rules_url: null | string;
  specs: string[];
  tags: string[];
  thumb_url: string;
  trending_rank: number;
  type: string;
  url: string;
  visits: number;
  year_published: number;
}
