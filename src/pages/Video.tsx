import { Dispatch, SetStateAction } from "react";
import Aside from "../components/aside/Aside";
import SingleVideo from "../components/single-video/SingleVideo";
import "./Page.scss";

function Video({
  menu,
  setMenu,
}: {
  menu: boolean;
  setMenu: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <main className="video__main">
      {menu && <Aside setMenu={setMenu} menu={menu} />}
      <SingleVideo />
    </main>
  );
}

export default Video;
