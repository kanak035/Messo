import {
  HiOutlineViewGrid,
  // HiOutlineQuestionMarkCircle,
  // HiOutlineCog,
} from "react-icons/hi";
import { LuMenuSquare } from "react-icons/lu";
import { GrCompliance } from "react-icons/gr";
// import { MdOutlineMapsUgc } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
import { BsPersonCheck } from "react-icons/bs";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "admindashboard",
    label: "Admin Dashboard",
    path: "/app/admin",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/app",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "menu",
    label: "Menu Review",
    path: "/app/menu",
    icon: <LuMenuSquare />,
  },
  {
    key: "cs",
    label: "Contact Us",
    path: "/app/complaints",
    icon: <GrCompliance />,
  },
  {
    key: "announcement",
    label: "Announcement",
    path: "/app/announcement",
    icon: <TfiAnnouncement />,
  },
  {
    key: "hrreview",
    label: "HR Review",
    path: "/app/hrreview",
    icon: <BsPersonCheck />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  // {
  //   key: "settings",
  //   label: "Settings",
  //   path: "/settings",
  //   icon: <HiOutlineCog />,
  // },
  // {
  //   key: "support",
  //   label: "Help & Support",
  //   path: "/support",
  //   icon: <HiOutlineQuestionMarkCircle />,
  // },
];
