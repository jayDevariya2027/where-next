import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar";
import DashProflie from "../components/DashProflie";
import DashPosts from "../components/DashPosts";
import DashUsers from "../components/DashUsers";
import DashComments from "../components/DashComments";
import DashboardComp from "../components/DashboardComp";
import { useSelector } from "react-redux";
export default function Dashboard() {
  const { currentUser } = useSelector((state) => state.user);
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) setTab(tabFromUrl);
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        <DashSidebar />
      </div>
      {tab === "profile" && <DashProflie />}
      {tab === "posts" &&
        (currentUser.isAdmin ? (
          <DashPosts />
        ) : (
          <p className="m-auto">only admin can make changes </p>
        ))}
      {tab === "users" &&
        (currentUser.isAdmin ? (
          <DashUsers />
        ) : (
          <p className="m-auto">only admin can make changes </p>
        ))}
      {tab === "comments" &&
        (currentUser.isAdmin ? (
          <DashComments />
        ) : (
          <p className="m-auto">only admin can make changes </p>
        ))}
      {tab === "dash" &&
        (currentUser.isAdmin ? (
          <DashboardComp />
        ) : (
          <p className="m-auto">only admin can make changes </p>
        ))}
    </div>
  );
}
