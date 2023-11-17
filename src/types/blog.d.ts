interface Blog {
  readonly _id: string;
  title: string;
  thumbnail: string;
  description: string;
  likeCount: number;
  publishDate: string;
  isLiked?: boolean;
  readonly userId: string;
  userName: string;
  userProfile: string;
}

export {Blog};
