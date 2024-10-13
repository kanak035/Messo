// import mb from "../menureview/menuimages1/BH-3/mb.png";
// import ml from "../menureview/menuimages1/BH-3/ml.png";
// import ms from "../menureview/menuimages1/BH-3/ms.png";
// import md from "../menureview/menuimages1/BH-3/md.png";
// import tb from "../menureview/menuimages1/BH-3/tb.png";
// import tl from "../menureview/menuimages1/BH-3/tl.png";
// import ts from "../menureview/menuimages1/BH-3/ts.png";
// import td from "../menureview/menuimages1/BH-3/td.png";
// import wb from "../menureview/menuimages1/BH-3/wb.png";
// import wl from "../menureview/menuimages1/BH-3/wl.png";
// import ws from "../menureview/menuimages1/BH-3/ws.png";
// import wd from "../menureview/menuimages1/BH-3/wd.png";
// import thb from "../menureview/menuimages1/BH-3/thb.png";
// import thl from "../menureview/menuimages1/BH-3/thl.png";
// import ths from "../menureview/menuimages1/BH-3/ths.png";
// import thd from "../menureview/menuimages1/BH-3/thd.png";
// import fb from "../menureview/menuimages1/BH-3/fb.png";
// import fl from "../menureview/menuimages1/BH-3/fl.png";
// import fs from "../menureview/menuimages1/BH-3/fs.png";
// import fd from "../menureview/menuimages1/BH-3/fd.png";
// import sab from "../menureview/menuimages1/BH-3/sab.png";
// import sal from "../menureview/menuimages1/BH-3/sal.png";
// import sas from "../menureview/menuimages1/BH-3/sas.png";
// import sad from "../menureview/menuimages1/BH-3/sad.png";
// import sub from "../menureview/menuimages1/BH-3/sub.png";
// import sul from "../menureview/menuimages1/BH-3/sul.png";
// import sus from "../menureview/menuimages1/BH-3/sus.png";
// import sud from "../menureview/menuimages1/BH-3/sud.png";
// const items = [
//   {
//     id: 1,
//     src: mb,
//     link: "link here",
//   },
//   {
//     id: 2,
//     src: ml,
//     link: "link here",
//   },
//   {
//     id: 3,
//     src: ms,
//     link: "link here",
//   },
//   {
//     id: 4,
//     src: md,
//     link: "link here",
//   },
//   {
//     id: 5,
//     src: tb,
//     link: "link here",
//   },
//   {
//     id: 6,
//     src: tl,
//     link: "link here",
//   },
//   {
//     id: 7,
//     src: ts,
//     link: "link here",
//   },
//   {
//     id: 8,
//     src: td,
//     link: "link here",
//   },
//   {
//     id: 9,
//     src: wb,
//     link: "link here",
//   },
//   {
//     id: 10,
//     src: wl,
//     link: "link here",
//   },
//   {
//     id: 11,
//     src: ws,
//     link: "link here",
//   },
//   {
//     id: 12,
//     src: wd,
//     link: "link here",
//   },
//   {
//     id: 13,
//     src: thb,
//     link: "link here",
//   },
//   {
//     id: 14,
//     src: thl,
//     link: "link here",
//   },
//   {
//     id: 15,
//     src: ths,
//     link: "link here",
//   },
//   {
//     id: 16,
//     src: thd,
//     link: "link here",
//   },
//   {
//     id: 17,
//     src: fb,
//     link: "link here",
//   },
//   {
//     id: 18,
//     src: fl,
//     link: "link here",
//   },
//   {
//     id: 19,
//     src: fs,
//     link: "link here",
//   },
//   {
//     id: 20,
//     src: fd,
//     link: "link here",
//   },
//   {
//     id: 21,
//     src: sab,
//     link: "link here",
//   },
//   {
//     id: 22,
//     src: sal,
//     link: "link here",
//   },
//   {
//     id: 23,
//     src: sas,
//     link: "link here",
//   },
//   {
//     id: 24,
//     src: sad,
//     link: "link here",
//   },
//   {
//     id: 25,
//     src: sub,
//     link: "link here",
//   },
//   {
//     id: 26,
//     src: sul,
//     link: "link here",
//   },
//   {
//     id: 27,
//     src: sus,
//     link: "link here",
//   },
//   {
//     id: 28,
//     src: sud,
//     link: "link here",
//   },
// ];

// export { items };

//default image link:https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1

import { useAuth } from "../../../Auth/authProvider"; // Adjust the import according to your project structure

const getImagePath = (hostelname, mealType) => {
  try {
    return require(`../menureview/menuimages1/${hostelname}/${mealType}.png`);
  } catch (error) {
    // Fallback to a default image if the specific image is not found
    return "https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  }
};

const useMenuItems = () => {
  const { userDetails } = useAuth();
  const hostelname = userDetails.hostelname;

  const mealTypes = [
    "mb",
    "ml",
    "ms",
    "md",
    "tb",
    "tl",
    "ts",
    "td",
    "wb",
    "wl",
    "ws",
    "wd",
    "thb",
    "thl",
    "ths",
    "thd",
    "fb",
    "fl",
    "fs",
    "fd",
    "sab",
    "sal",
    "sas",
    "sad",
    "sub",
    "sul",
    "sus",
    "sud",
  ];

  const items = mealTypes.map((mealType, index) => ({
    id: index + 1,
    src: getImagePath(hostelname, mealType),
    link: "link here", // Replace with actual link if needed
  }));

  return items;
};

export { useMenuItems };
