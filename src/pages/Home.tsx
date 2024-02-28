import { Dispatch, SetStateAction, useState } from "react";
import Feed from "../components/feed/Feed";
import Navbar from "../components/navbar/Navbar";
import Aside from "../components/aside/Aside";
import { useMediaQuery } from "react-responsive";
import "./Page.scss";

function Home({
  menu,
  setMenu,
}: {
  menu: boolean;
  setMenu: Dispatch<SetStateAction<boolean>>;
}) {
  const [categoryID, setCategoryID] = useState("all");
  const isMobile = useMediaQuery({ query: "(max-width: 1200px)" });

  const visible = !isMobile || menu;

  return (
    <main className="main">
      <div className="main__content">
        {visible && <Aside setMenu={setMenu} menu={menu} />}
        <div>
          <Navbar setCategoryID={setCategoryID} />
          <Feed categoryID={categoryID} />
        </div>
      </div>
    </main>
  );
}

export default Home;
