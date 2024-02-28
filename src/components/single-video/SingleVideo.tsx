import { Link, useParams } from "react-router-dom";
import "./SingleVideo.scss";
import { useEffect, useState } from "react";
import {
  getChanelById,
  getCommentById,
  getVideoById,
  getVideos,
} from "../../api/Video";
import { CommentThread, YouTubeVideoType } from "../../types/types";
import formatCount from "../helper/Helper";
import moment from "moment";

function SingleVideo() {
  const [comment, setComment] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [video, setVideo] = useState<YouTubeVideoType | null>(null);
  const [chanel, setChanel] = useState("");
  const [sub, setSub] = useState("");
  const [commentData, setCommentData] = useState<CommentThread[] | null>(null);
  const [videos, setVideos] = useState<YouTubeVideoType[] | null>(null);
  const [dotToggle, setDotToggle] = useState(false);

  const handleComment = () => {
    setComment(true);
  };

  const { videoID, channelID, categoryID } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);

    getVideoById(videoID).then((res) => {
      setVideo(res);
    });

    getChanelById(channelID).then((res) => {
      setChanel(res?.snippet?.thumbnails?.default?.url);
      setSub(res?.statistics?.subscriberCount);
    });

    getCommentById(videoID).then((res) => {
      setCommentData(res);
    });

    getVideos(categoryID).then((res) => {
      setVideos(res);
    });
  }, [videoID, channelID, categoryID]);

  return (
    <>
      <section className="single__container">
        <section className="single__left">
          <div className="single__left_video">
            <iframe
              width="914"
              height="514"
              frameBorder="0"
              src={`https://www.youtube.com/embed/${video?.id}?autoplay=0`}
              title="Create YouTube Clone Using React JS | Build Complete Website Like YouTube In React JS 2024"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <h1 className="single__left_video_title">{video?.snippet.title}</h1>
            <div className="single__left_video_content">
              <div className="single__left_video_content_left">
                <img
                  id="img"
                  draggable="false"
                  width="40"
                  src={chanel}
                  alt=""
                />
                <div className="single__left_video_content_left_text">
                  <h5>{video?.snippet.channelTitle}</h5>
                  <p>
                    {formatCount(sub)} <span>subscribers</span>
                  </p>
                </div>
                <button type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 96 96"
                    width="30"
                    height="30"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <defs>
                      <clipPath id="__lottie_element_87">
                        <rect width="96" height="96" x="0" y="0"></rect>
                      </clipPath>
                    </defs>
                    <g clipPath="url(#__lottie_element_87)">
                      <g transform="matrix(1,0,0,1,48,48)" opacity="1">
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(3,3,3)"
                            fillOpacity="0"
                            d=" M-6.5,26.410999298095703 C-6.5,26.410999298095703 6.5,26.410999298095703 6.5,26.410999298095703 C6.5,29.923999786376953 3.575000047683716,32.79899978637695 0,32.79899978637695 C-3.575000047683716,32.79899978637695 -6.5,29.923999786376953 -6.5,26.410999298095703z M22.75,19.290000915527344 C22.75,19.290000915527344 16.25,13.28600025177002 16.25,13.28600025177002 C16.25,13.28600025177002 16.25,-4.184000015258789 16.25,-4.184000015258789 C16.25,-12.071999549865723 12.381999969482422,-18.107999801635742 6.077000141143799,-20.47100067138672 C1.9819999933242798,-22.163999557495117 -2.502000093460083,-22.06800079345703 -6.4019999504089355,-20.375 C-12.51200008392334,-17.947999954223633 -16.25,-11.944000244140625 -16.25,-4.184000015258789 C-16.25,-4.184000015258789 -16.25,13.28600025177002 -16.25,13.28600025177002 C-16.25,13.28600025177002 -22.75,19.290000915527344 -22.75,19.290000915527344 C-22.75,19.290000915527344 -22.75,20.02400016784668 -22.75,20.02400016784668 C-22.75,20.02400016784668 22.75,20.02400016784668 22.75,20.02400016784668 C22.75,20.02400016784668 22.75,19.290000915527344 22.75,19.290000915527344z M26,17.947999954223633 C26,17.947999954223633 26,23.218000411987305 26,23.218000411987305 C26,23.218000411987305 -26,23.218000411987305 -26,23.218000411987305 C-26,23.218000411987305 -26,17.947999954223633 -26,17.947999954223633 C-26,17.947999954223633 -19.5,11.944000244140625 -19.5,11.944000244140625 C-19.5,11.944000244140625 -19.5,-4.502999782562256 -19.5,-4.502999782562256 C-19.5,-13.829000473022461 -14.430000305175781,-21.173999786376953 -6.5,-23.60099983215332 C-6.5,-23.60099983215332 -6.5,-24.81399917602539 -6.5,-24.81399917602539 C-6.5,-29.349000930786133 -1.6579999923706055,-32.79800033569336 3.2170000076293945,-30.434999465942383 C5.329999923706055,-29.413000106811523 6.5,-27.145000457763672 6.5,-24.81399917602539 C6.5,-24.81399917602539 6.5,-23.569000244140625 6.5,-23.569000244140625 C14.430000305175781,-21.173999786376953 19.5,-13.795999526977539 19.5,-4.4710001945495605 C19.5,-4.4710001945495605 19.5,11.97599983215332 19.5,11.97599983215332 C19.5,11.97599983215332 26,17.947999954223633 26,17.947999954223633z"
                          ></path>
                          <path
                            fill="rgb(3,3,3)"
                            fillOpacity="1"
                            d=" M-6.5,26.410999298095703 C-6.5,26.410999298095703 6.5,26.410999298095703 6.5,26.410999298095703 C6.5,29.923999786376953 3.575000047683716,32.79899978637695 0,32.79899978637695 C-3.575000047683716,32.79899978637695 -6.5,29.923999786376953 -6.5,26.410999298095703z M22.75,19.290000915527344 C22.75,19.290000915527344 16.25,13.28600025177002 16.25,13.28600025177002 C16.25,13.28600025177002 16.25,-4.184000015258789 16.25,-4.184000015258789 C16.25,-12.071999549865723 12.381999969482422,-18.107999801635742 6.077000141143799,-20.47100067138672 C1.9819999933242798,-22.163999557495117 -2.502000093460083,-22.06800079345703 -6.4019999504089355,-20.375 C-12.51200008392334,-17.947999954223633 -16.25,-11.944000244140625 -16.25,-4.184000015258789 C-16.25,-4.184000015258789 -16.25,13.28600025177002 -16.25,13.28600025177002 C-16.25,13.28600025177002 -22.75,19.290000915527344 -22.75,19.290000915527344 C-22.75,19.290000915527344 -22.75,20.02400016784668 -22.75,20.02400016784668 C-22.75,20.02400016784668 22.75,20.02400016784668 22.75,20.02400016784668 C22.75,20.02400016784668 22.75,19.290000915527344 22.75,19.290000915527344z M26,17.947999954223633 C26,17.947999954223633 26,23.218000411987305 26,23.218000411987305 C26,23.218000411987305 -26,23.218000411987305 -26,23.218000411987305 C-26,23.218000411987305 -26,17.947999954223633 -26,17.947999954223633 C-26,17.947999954223633 -19.5,11.944000244140625 -19.5,11.944000244140625 C-19.5,11.944000244140625 -19.5,-4.502999782562256 -19.5,-4.502999782562256 C-19.5,-13.829000473022461 -14.430000305175781,-21.173999786376953 -6.5,-23.60099983215332 C-6.5,-23.60099983215332 -6.5,-24.81399917602539 -6.5,-24.81399917602539 C-6.5,-29.349000930786133 -1.6579999923706055,-32.79800033569336 3.2170000076293945,-30.434999465942383 C5.329999923706055,-29.413000106811523 6.5,-27.145000457763672 6.5,-24.81399917602539 C6.5,-24.81399917602539 6.5,-23.569000244140625 6.5,-23.569000244140625 C14.430000305175781,-21.173999786376953 19.5,-13.795999526977539 19.5,-4.4710001945495605 C19.5,-4.4710001945495605 19.5,11.97599983215332 19.5,11.97599983215332 C19.5,11.97599983215332 26,17.947999954223633 26,17.947999954223633z"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                  Subscribe
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    focusable="false"
                  >
                    <path d="m18 9.28-6.35 6.35-6.37-6.35.72-.71 5.64 5.65 5.65-5.65z"></path>
                  </svg>
                </button>
              </div>
              <div className="single__left_video_content_right">
                <div className="like">
                  <button type="button" className="first">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      focusable="false"
                    >
                      <path d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"></path>
                    </svg>
                    {formatCount(video?.statistics.likeCount)}
                  </button>
                  <hr />
                  <button className="last" type="button" title="like">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      focusable="false"
                    >
                      <path d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"></path>
                    </svg>
                  </button>
                </div>
                <button type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    focusable="false"
                  >
                    <path d="M15 5.63 20.66 12 15 18.37V14h-1c-3.96 0-7.14 1-9.75 3.09 1.84-4.07 5.11-6.4 9.89-7.1l.86-.13V5.63M14 3v6C6.22 10.13 3.11 15.33 2 21c2.78-3.97 6.44-6 12-6v6l8-9-8-9z"></path>
                  </svg>
                  Share
                </button>
                <button type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    focusable="false"
                  >
                    <path d="M17 18v1H6v-1h11zm-.5-6.6-.7-.7-3.8 3.7V4h-1v10.4l-3.8-3.8-.7.7 5 5 5-4.9z"></path>
                  </svg>
                  Download
                </button>
                <button type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 24 24"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    focusable="false"
                  >
                    <path d="M8 7c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm-1 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3.79-7.77L21 18.44V20h-3.27l-5.76-5.76-1.27 1.27c.19.46.3.96.3 1.49 0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4c.42 0 .81.08 1.19.2l1.37-1.37-1.11-1.11C8 10.89 7.51 11 7 11c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4c0 .43-.09.84-.21 1.23zm-.71.71-.43-.44.19-.58c.11-.34.16-.64.16-.92 0-1.65-1.35-3-3-3S4 5.35 4 7s1.35 3 3 3c.36 0 .73-.07 1.09-.21l.61-.24.46.46 1.11 1.11.71.71-.71.71-1.37 1.37-.43.43-.58-.18C7.55 14.05 7.27 14 7 14c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3c0-.38-.07-.75-.22-1.12l-.25-.61.47-.47 1.27-1.27.71-.71.71.71L18.15 19H20v-.15l-9.92-9.91zM17.73 4H21v1.56l-5.52 5.52-2.41-2.41L17.73 4zm.42 1-3.67 3.67 1 1L20 5.15V5h-1.85z"></path>
                  </svg>
                  Clip
                </button>
                <button
                  onClick={() => setDotToggle((prev) => !prev)}
                  className="toggleContent"
                  type="button"
                  title="n"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    focusable="false"
                  >
                    <path d="M7.5 12c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm4.5-1.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path>
                  </svg>
                </button>
                {dotToggle && (
                  <div className="single__left_video_content_right_resContent">
                    <div className="like">
                      <button type="button" className="first">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          focusable="false"
                        >
                          <path d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"></path>
                        </svg>
                        {formatCount(video?.statistics.likeCount)}
                      </button>
                      <hr />
                      <button className="last" type="button" title="like">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          focusable="false"
                        >
                          <path d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"></path>
                        </svg>
                      </button>
                    </div>
                    <button type="button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 96 96"
                        width="30"
                        height="30"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <defs>
                          <clipPath id="__lottie_element_87">
                            <rect width="96" height="96" x="0" y="0"></rect>
                          </clipPath>
                        </defs>
                        <g clipPath="url(#__lottie_element_87)">
                          <g transform="matrix(1,0,0,1,48,48)" opacity="1">
                            <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                              <path
                                fill="rgb(3,3,3)"
                                fillOpacity="0"
                                d=" M-6.5,26.410999298095703 C-6.5,26.410999298095703 6.5,26.410999298095703 6.5,26.410999298095703 C6.5,29.923999786376953 3.575000047683716,32.79899978637695 0,32.79899978637695 C-3.575000047683716,32.79899978637695 -6.5,29.923999786376953 -6.5,26.410999298095703z M22.75,19.290000915527344 C22.75,19.290000915527344 16.25,13.28600025177002 16.25,13.28600025177002 C16.25,13.28600025177002 16.25,-4.184000015258789 16.25,-4.184000015258789 C16.25,-12.071999549865723 12.381999969482422,-18.107999801635742 6.077000141143799,-20.47100067138672 C1.9819999933242798,-22.163999557495117 -2.502000093460083,-22.06800079345703 -6.4019999504089355,-20.375 C-12.51200008392334,-17.947999954223633 -16.25,-11.944000244140625 -16.25,-4.184000015258789 C-16.25,-4.184000015258789 -16.25,13.28600025177002 -16.25,13.28600025177002 C-16.25,13.28600025177002 -22.75,19.290000915527344 -22.75,19.290000915527344 C-22.75,19.290000915527344 -22.75,20.02400016784668 -22.75,20.02400016784668 C-22.75,20.02400016784668 22.75,20.02400016784668 22.75,20.02400016784668 C22.75,20.02400016784668 22.75,19.290000915527344 22.75,19.290000915527344z M26,17.947999954223633 C26,17.947999954223633 26,23.218000411987305 26,23.218000411987305 C26,23.218000411987305 -26,23.218000411987305 -26,23.218000411987305 C-26,23.218000411987305 -26,17.947999954223633 -26,17.947999954223633 C-26,17.947999954223633 -19.5,11.944000244140625 -19.5,11.944000244140625 C-19.5,11.944000244140625 -19.5,-4.502999782562256 -19.5,-4.502999782562256 C-19.5,-13.829000473022461 -14.430000305175781,-21.173999786376953 -6.5,-23.60099983215332 C-6.5,-23.60099983215332 -6.5,-24.81399917602539 -6.5,-24.81399917602539 C-6.5,-29.349000930786133 -1.6579999923706055,-32.79800033569336 3.2170000076293945,-30.434999465942383 C5.329999923706055,-29.413000106811523 6.5,-27.145000457763672 6.5,-24.81399917602539 C6.5,-24.81399917602539 6.5,-23.569000244140625 6.5,-23.569000244140625 C14.430000305175781,-21.173999786376953 19.5,-13.795999526977539 19.5,-4.4710001945495605 C19.5,-4.4710001945495605 19.5,11.97599983215332 19.5,11.97599983215332 C19.5,11.97599983215332 26,17.947999954223633 26,17.947999954223633z"
                              ></path>
                              <path
                                fill="rgb(3,3,3)"
                                fillOpacity="1"
                                d=" M-6.5,26.410999298095703 C-6.5,26.410999298095703 6.5,26.410999298095703 6.5,26.410999298095703 C6.5,29.923999786376953 3.575000047683716,32.79899978637695 0,32.79899978637695 C-3.575000047683716,32.79899978637695 -6.5,29.923999786376953 -6.5,26.410999298095703z M22.75,19.290000915527344 C22.75,19.290000915527344 16.25,13.28600025177002 16.25,13.28600025177002 C16.25,13.28600025177002 16.25,-4.184000015258789 16.25,-4.184000015258789 C16.25,-12.071999549865723 12.381999969482422,-18.107999801635742 6.077000141143799,-20.47100067138672 C1.9819999933242798,-22.163999557495117 -2.502000093460083,-22.06800079345703 -6.4019999504089355,-20.375 C-12.51200008392334,-17.947999954223633 -16.25,-11.944000244140625 -16.25,-4.184000015258789 C-16.25,-4.184000015258789 -16.25,13.28600025177002 -16.25,13.28600025177002 C-16.25,13.28600025177002 -22.75,19.290000915527344 -22.75,19.290000915527344 C-22.75,19.290000915527344 -22.75,20.02400016784668 -22.75,20.02400016784668 C-22.75,20.02400016784668 22.75,20.02400016784668 22.75,20.02400016784668 C22.75,20.02400016784668 22.75,19.290000915527344 22.75,19.290000915527344z M26,17.947999954223633 C26,17.947999954223633 26,23.218000411987305 26,23.218000411987305 C26,23.218000411987305 -26,23.218000411987305 -26,23.218000411987305 C-26,23.218000411987305 -26,17.947999954223633 -26,17.947999954223633 C-26,17.947999954223633 -19.5,11.944000244140625 -19.5,11.944000244140625 C-19.5,11.944000244140625 -19.5,-4.502999782562256 -19.5,-4.502999782562256 C-19.5,-13.829000473022461 -14.430000305175781,-21.173999786376953 -6.5,-23.60099983215332 C-6.5,-23.60099983215332 -6.5,-24.81399917602539 -6.5,-24.81399917602539 C-6.5,-29.349000930786133 -1.6579999923706055,-32.79800033569336 3.2170000076293945,-30.434999465942383 C5.329999923706055,-29.413000106811523 6.5,-27.145000457763672 6.5,-24.81399917602539 C6.5,-24.81399917602539 6.5,-23.569000244140625 6.5,-23.569000244140625 C14.430000305175781,-21.173999786376953 19.5,-13.795999526977539 19.5,-4.4710001945495605 C19.5,-4.4710001945495605 19.5,11.97599983215332 19.5,11.97599983215332 C19.5,11.97599983215332 26,17.947999954223633 26,17.947999954223633z"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                      Subscribe
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        focusable="false"
                      >
                        <path d="m18 9.28-6.35 6.35-6.37-6.35.72-.71 5.64 5.65 5.65-5.65z"></path>
                      </svg>
                    </button>
                    <button type="button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        focusable="false"
                      >
                        <path d="M15 5.63 20.66 12 15 18.37V14h-1c-3.96 0-7.14 1-9.75 3.09 1.84-4.07 5.11-6.4 9.89-7.1l.86-.13V5.63M14 3v6C6.22 10.13 3.11 15.33 2 21c2.78-3.97 6.44-6 12-6v6l8-9-8-9z"></path>
                      </svg>
                      Share
                    </button>
                    <button type="button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        focusable="false"
                      >
                        <path d="M17 18v1H6v-1h11zm-.5-6.6-.7-.7-3.8 3.7V4h-1v10.4l-3.8-3.8-.7.7 5 5 5-4.9z"></path>
                      </svg>
                      Download
                    </button>
                    <button type="button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        enableBackground="new 0 0 24 24"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        focusable="false"
                      >
                        <path d="M8 7c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm-1 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3.79-7.77L21 18.44V20h-3.27l-5.76-5.76-1.27 1.27c.19.46.3.96.3 1.49 0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4c.42 0 .81.08 1.19.2l1.37-1.37-1.11-1.11C8 10.89 7.51 11 7 11c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4c0 .43-.09.84-.21 1.23zm-.71.71-.43-.44.19-.58c.11-.34.16-.64.16-.92 0-1.65-1.35-3-3-3S4 5.35 4 7s1.35 3 3 3c.36 0 .73-.07 1.09-.21l.61-.24.46.46 1.11 1.11.71.71-.71.71-1.37 1.37-.43.43-.58-.18C7.55 14.05 7.27 14 7 14c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3c0-.38-.07-.75-.22-1.12l-.25-.61.47-.47 1.27-1.27.71-.71.71.71L18.15 19H20v-.15l-9.92-9.91zM17.73 4H21v1.56l-5.52 5.52-2.41-2.41L17.73 4zm.42 1-3.67 3.67 1 1L20 5.15V5h-1.85z"></path>
                      </svg>
                      Clip
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="single__left_video_desc">
              <div>
                <p>
                  {formatCount(video?.statistics.viewCount)} views{" "}
                  {moment(video?.snippet.publishedAt).format("MMMM Do YYYY")}
                </p>

                <div className="tag">
                  {video?.snippet?.tags?.map((tag, i) => {
                    return (
                      <Link className="tagLink" to="/" key={i}>
                        #{tag}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <p>{video?.snippet.description.slice(0, 350)}...</p>
            </div>
          </div>
          <div className="single__left_comment">
            <div className="single__left_comment_start">
              <p>{formatCount(video?.statistics.commentCount)} Comments</p>
              <button type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 24 24"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
                >
                  <path d="M21 6H3V5h18v1zm-6 5H3v1h12v-1zm-6 6H3v1h6v-1z"></path>
                </svg>
                Sort by
              </button>
            </div>
            <form className="single__left_comment_create">
              <div className="single__left_comment_create_visible">
                <img
                  id="img"
                  draggable="false"
                  alt="ALPA a"
                  height="40"
                  width="40"
                  src="https://yt3.ggpht.com/yti/AGOGRCqqZHHwaOPrVUz22if99QdhC5PCe01Xu_XUdpYegw=s88-c-k-c0x00ffffff-no-rj"
                />
                <input
                  type="text"
                  placeholder="Add a comment"
                  onFocus={handleComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
              </div>
              {comment && (
                <div className="single__left_comment_create_hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 24 24"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    focusable="false"
                  >
                    <path d="M15.83 15c-.52 1.38-2.19 2-3.79 2-1.59 0-3.28-.62-3.85-2h7.64m.69-1H7.49c-.27 0-.49.22-.46.47C7.34 16.83 9.7 18 12.05 18c2.35 0 4.69-1.18 4.93-3.54.03-.25-.2-.46-.46-.46zM12 3c4.96 0 9 4.04 9 9s-4.04 9-9 9-9-4.04-9-9 4.04-9 9-9m0-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.94 9.73C7.19 9.25 7.72 9 8.5 9c.75 0 1.28.25 1.57.75.14.24.45.32.68.18.24-.14.32-.44.18-.68C10.6 8.68 9.91 8 8.5 8c-1.48 0-2.15.69-2.44 1.27-.13.25-.03.55.21.67.07.04.15.06.23.06.18 0 .36-.1.44-.27zm7 0c.25-.48.78-.73 1.56-.73.75 0 1.28.25 1.57.75.14.24.45.32.68.18.24-.14.32-.44.18-.68C17.6 8.68 16.91 8 15.5 8c-1.48 0-2.15.69-2.44 1.27-.13.25-.03.55.21.67.07.04.15.06.23.06.18 0 .36-.1.44-.27z"></path>
                  </svg>
                  <div className="single__left_comment_create_hidden_button">
                    <button
                      onClick={() => setComment(false)}
                      className="cancel"
                      type="button"
                    >
                      Cancel
                    </button>
                    <button
                      className={`comment ${
                        newComment.trim() !== "" ? "active" : ""
                      }`}
                      type="submit"
                    >
                      Comment
                    </button>
                  </div>
                </div>
              )}
            </form>
            <div className="single__left_comment_user">
              {commentData?.map((commentData, i) => {
                return (
                  <div key={i} className="single__left_comment_box">
                    <img
                      id="img"
                      draggable="false"
                      alt="@user-em6zb5tl9c"
                      height="40"
                      width="40"
                      src={
                        commentData?.snippet.topLevelComment.snippet
                          .authorProfileImageUrl
                      }
                    />
                    <div className="single__left_comment_user_content">
                      <p>
                        {
                          commentData?.snippet.topLevelComment.snippet
                            .authorDisplayName
                        }
                        <span>
                          {moment(
                            commentData?.snippet.topLevelComment.snippet
                              .publishedAt
                          ).fromNow()}
                        </span>
                      </p>
                      <h6>
                        {
                          commentData?.snippet.topLevelComment.snippet
                            .textDisplay
                        }
                      </h6>
                      <div className="single__left_comment_user_content_like">
                        <button type="button" title="like">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            enableBackground="new 0 0 24 24"
                            height="24"
                            viewBox="0 0 24 24"
                            width="24"
                            focusable="false"
                          >
                            <path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path>
                          </svg>
                          5
                        </button>
                        <button type="button" title="jih">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            viewBox="0 0 24 24"
                            width="24"
                            focusable="false"
                          >
                            <path d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"></path>
                          </svg>
                        </button>
                        <p>Reply</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="single__right">
          {videos?.map((item, i) => {
            return (
              <Link
                to={`/video/${item.snippet.categoryId}/${item.id}/${item.snippet.channelId}`}
                key={i}
                className="single__right_container"
              >
                <div className="single__right_img">
                  <img src={item.snippet.thumbnails.default.url} alt="" />
                </div>
                <div className="single__right_content">
                  <h2>{item.snippet.title.slice(0, 50)}...</h2>
                  <p>{item.snippet.channelTitle}</p>
                  <p>{formatCount(item.statistics.viewCount)} views</p>
                  <h6>Sponsored</h6>
                </div>
              </Link>
            );
          })}
        </section>
      </section>
    </>
  );
}

export default SingleVideo;