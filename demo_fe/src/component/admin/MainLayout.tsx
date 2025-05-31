import { useRoutes } from "react-router-dom";
import { ItemsList } from "../../type/UserType";
import { Header } from "../header/Header";
import SideBar from "./side_bar";
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
        path: "google",
        icon: "https://cdn-icons-png.flaticon.com/512/300/300221.png"
      },
      {
        id: 102,
        name: "YouTube",
        path: "youtube",
        icon: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
      },
      {
        id: 103,
        name: "Github",
        path: "github",
        icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png"
      },
      {
        id: 104,
        name: "Stack Overflow",
        path: "stackoverflow",
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