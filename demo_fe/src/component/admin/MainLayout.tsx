import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Header } from "../header/Header";
import SideBar from "./side_bar";
import { ItemsList } from "../../type/UserType";
type Props = {
  children: React.ReactNode;
};
export const mockItemsList: ItemsList[] = [
  {
    id: 1,
    title: "Useful Tools",
    items: [
      {
        id: 101,
        name: "Google",
        url: "https://www.google.com",
        icon: "https://cdn-icons-png.flaticon.com/512/300/300221.png"
      },
      {
        id: 102,
        name: "YouTube",
        url: "https://www.youtube.com",
        icon: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
      },
      {
        id: 103,
        name: "Github",
        url: "https://github.com",
        icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png"
      },
      {
        id: 104,
        name: "Stack Overflow",
        url: "https://stackoverflow.com",
        icon: "https://cdn-icons-png.flaticon.com/512/2111/2111628.png"
      }
    ]
  }
];

function MainLayout({ children }: Props) {


  return (
    <div className="wrapper">
      <Header />
      <div className="body-wrapper">
        <SideBar items={mockItemsList} />
        {children}
      </div>
    </div>
  );
}

export default MainLayout;