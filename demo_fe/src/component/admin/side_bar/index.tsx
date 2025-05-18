import { Link, useLocation } from "react-router-dom";
import "./side_bar.scss";
import { ItemsList } from "../../../type/UserType";
import { IconBase } from "react-icons/lib";

function SideBar({ items }: { items: ItemsList[] }) {
    
  return (
    <>
      <div className="side-bar">
        {items &&
          items.map((itemsList, index) => (
            <div key={index} className="content-side-bar">
              <div>{itemsList.title}</div>
              <p>
                {itemsList.items.map((item, index) => (
                  <Link
                    key={index}
                    to={`/${item.url}`}
                    className={""}
                  >
                    <IconBase className="icon-sidebar" name={item.icon} />
                    {item.name}
                  </Link>
                ))}
              </p>
            </div>
          ))}
      </div>
    </>
  );
}
export default SideBar;