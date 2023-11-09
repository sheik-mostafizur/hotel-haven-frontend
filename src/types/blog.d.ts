interface Blog {
  _id: string;
  title: string;
  thumbnail: string;
  description: string;
  likeCount: number;
  publishDate: string;
  isLiked?: boolean;
  isFavorite?: boolean;
  userId: string;
  userName: string;
  userProfile: string;
}

export {Blog};
