export interface IForumBadge {
  cost: number;
  id: string;
  name: string;
  images: {
    thumb: string;
  };
}

export interface IForumImage {
  thumb: string;
  small: string;
  medium: string;
  large: string;
  original: string;
}

export interface IForumUser {
  created_at: string | null;
  created_at_ago: string;
  forum_email: boolean;
  id: string;
  imageUrl: string;
  image_url: string;
  images: IForumImage;
  isOwner: boolean;
  isVerified: boolean;
  is_moderator: boolean;
  is_new: boolean;
  is_owner: boolean;
  is_partner: boolean;
  is_premium: boolean;
  message_email: boolean;
  num_followers: number;
  pfUser: {
    objectId: string;
  };
  price_email: boolean;
  products: {};
  roles: {};
  updated_at: null | string;
  updated_at_ago: string;
  url: string;
  username: string;
}

export default interface IForumPost {
  active: boolean;
  badges: IForumBadge[];
  badges_count: number;
  created_at: Date;
  created_at_ago: string;
  description: string;
  description_preview: string;
  description_stripped: string;
  flair: string;
  handle: string;
  id: string;
  image_url: string;
  images: IForumImage;
  is_pinned: boolean;
  is_reported: boolean;
  num_comments: number;
  num_likes: number;
  post_url: string;
  score: number;
  site_name: string;
  title: string;
  type: string;
  updated_at_ago: string;
  user: IForumUser;
}
