import axios from "axios";

const API_KAY = "AIzaSyBeO5GOtYz_ZqTeM_pvVxNqhw2y9Ue3dt8";

export const getVideos = async (category: string | undefined) => {
  const videos = await axios.get(
    category !== "all"
      ? `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KAY}`
      : `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${API_KAY}`
  );

  return videos.data.items;
};

export const getVideosCategory = async () => {
  const category = await axios.get(
    `https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key=${API_KAY}`
  );

  return category.data.items;
};

export const getVideoById = async (id: string | undefined) => {
  const video = await axios.get(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KAY}`
  );

  return video.data.items[0];
};

export const getChanelById = async (id: string | undefined) => {
  const video = await axios.get(
    `  https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KAY}
    `
  );

  return video.data.items[0];
};

export const getCommentById = async (id: string | undefined) => {
  const comment =
    await axios.get(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${id}&key=${API_KAY}

  `);

  return comment.data.items;
};
