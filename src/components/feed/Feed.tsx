import { useEffect, useState } from "react";
import { getVideos } from "../../api/Video";
import { YouTubeVideoType } from "../../types/types";
import "./Feed.scss";
import moment from "moment";
import formatCount from "../helper/Helper";
import { Link } from "react-router-dom";

function Feed({ categoryID }: { categoryID: string }) {
  const [videos, setVideos] = useState<YouTubeVideoType[]>([]);

  useEffect(() => {
    getVideos(categoryID)
      .then((res) => setVideos(res))
      .catch((err) => {
        alert(err.response.data.error.errors[0].reason);
      });
  }, [categoryID]);

  return (
    <section className="feed">
      {videos.map((video, i) => {
        return (
          <Link
            to={`/video/${video.snippet.categoryId}/${video.id}/${video.snippet.channelId}`}
            key={i}
            className="feed__content"
          >
            <div className="feed__content_img">
              <img
                loading="lazy"
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
              />
            </div>
            <p className="feed__content_title">{video.snippet.title}</p>
            <p className="feed__content_channel">
              {video.snippet.channelTitle}
            </p>
            <div className="feed__content_footer">
              <p>{formatCount(video.statistics.viewCount)} View</p>
              <p>{moment(video.snippet.publishedAt).fromNow()}</p>
            </div>
          </Link>
        );
      })}
    </section>
  );
}

export default Feed;
