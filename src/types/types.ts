export type YouTubeVideoType = {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
      standard: {
        url: string;
        width: number;
        height: number;
      };
      maxres: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    localized: {
      title: string;
      description: string;
    };
    defaultAudioLanguage: string;
  };
  contentDetails: {
    duration: string;
    dimension: string;
    definition: string;
    caption: string;
    licensedContent: boolean;
    contentRating: {};
    projection: string;
  };
  statistics: {
    viewCount: string;
    likeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
};

export type VideoCategoryType = {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    title: string;
    assignable: boolean;
    channelId: string;
  };
};

interface AuthorChannelId {
  value: string;
}

interface TopLevelCommentSnippet {
  authorChannelId: AuthorChannelId;
  authorChannelUrl: string;
  authorDisplayName: string;
  authorProfileImageUrl: string;
  canRate: boolean;
  channelId: string;
  likeCount: number;
  publishedAt: string; // ISO 8601 format
  textDisplay: string;
  textOriginal: string;
  updatedAt: string; // ISO 8601 format
  videoId: string;
  viewerRating: string;
}

interface TopLevelComment {
  etag: string;
  id: string;
  kind: string;
  snippet: TopLevelCommentSnippet;
}

interface Snippet {
  canReply: boolean;
  channelId: string;
  isPublic: boolean;
  topLevelComment: TopLevelComment;
  totalReplyCount: number;
  videoId: string;
}

export interface CommentThread {
  etag: string;
  id: string;
  kind: string;
  snippet: Snippet;
}
