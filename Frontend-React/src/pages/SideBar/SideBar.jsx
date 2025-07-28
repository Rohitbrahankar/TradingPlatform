// import { logout } from "@/Redux/Auth/Action";
// import { Button } from "@/components/ui/button";
// import { SheetClose } from "@/components/ui/sheet";
// import {
//   ExitIcon,
//   BookmarkIcon,
//   PersonIcon,
//   DashboardIcon,
//   HomeIcon,
//   ActivityLogIcon,
// } from "@radix-ui/react-icons";
// import {
//   CreditCardIcon,
//   LandmarkIcon,
//   WalletIcon,
// } from "lucide-react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const menu = [
//   { name: "Home", path: "/", icon: <HomeIcon className="h-6 w-6" /> },
//   {
//     name: "Portfolio",
//     path: "/portfolio",
//     icon: <DashboardIcon className="h-6 w-6" />,
//   },
//   {
//     name: "Watchlist",
//     path: "/watchlist",
//     icon: <BookmarkIcon className="h-6 w-6" />,
//   },
//   {
//     name: "Activity",
//     path: "/activity",
//     icon: <ActivityLogIcon className="h-6 w-6" />,
//   },
//   { name: "Wallet", path: "/wallet", icon: <WalletIcon /> },
//   {
//     name: "Payment Details",
//     path: "/payment-details",
//     icon: <LandmarkIcon className="h-6 w-6" />,
//   },
//   {
//     name: "Withdrawal",
//     path: "/withdrawal",
//     icon: <CreditCardIcon className="h-6 w-6" />,
//   },
//   {
//     name: "Profile",
//     path: "/profile",
//     icon: <PersonIcon className="h-6 w-6" />,
//   },
//   { name: "Logout", path: "/", icon: <ExitIcon className="h-6 w-6" /> },
// ];

// const SideBar = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleLogout = () => {
//     dispatch(logout());
//   };

//   const handleMenuClick = (item) => {
//     if (item.name === "Logout") {
//       handleLogout();
//       navigate(item.path);
//     } else {
//       navigate(item.path);
//     }
//   };

//   return (
//     <div className="mt-10 space-y-5 bg-gray-800 min-h-screen px-4">
//       {menu.map((item) => (
//         <div key={item.name} className="bg-gray-800">
//           <SheetClose className="w-full">
//             <Button
//               onClick={() => handleMenuClick(item)}
//               variant="outline"
//               className="flex items-center gap-5 py-6 w-full text-white hover:bg-gray-700"
//             >
//               <span className="w-8">{item.icon}</span>
//               <p>{item.name}</p>
//             </Button>
//           </SheetClose>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SideBar;

import { logout } from "@/Redux/Auth/Action";
import { SheetClose } from "@/components/ui/sheet";
import {
  ExitIcon,
  BookmarkIcon,
  PersonIcon,
  DashboardIcon,
  HomeIcon,
  ActivityLogIcon,
} from "@radix-ui/react-icons";
import {
  CreditCardIcon,
  LandmarkIcon,
  WalletIcon,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const menu = [
  { name: "Home", path: "/", icon: <HomeIcon className="h-5 w-5" /> },
  { name: "Portfolio", path: "/portfolio", icon: <DashboardIcon className="h-5 w-5" /> },
  { name: "Watchlist", path: "/watchlist", icon: <BookmarkIcon className="h-5 w-5" /> },
  { name: "Activity", path: "/activity", icon: <ActivityLogIcon className="h-5 w-5" /> },
  { name: "Wallet", path: "/wallet", icon: <WalletIcon className="h-5 w-5" /> },
  { name: "Payment Details", path: "/payment-details", icon: <LandmarkIcon className="h-5 w-5" /> },
  { name: "Withdrawal", path: "/withdrawal", icon: <CreditCardIcon className="h-5 w-5" /> },
  { name: "Profile", path: "/profile", icon: <PersonIcon className="h-5 w-5" /> },
  { name: "Logout", path: "/", icon: <ExitIcon className="h-5 w-5" /> },
];

const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleMenuClick = (item) => {
    if (item.name === "Logout") {
      handleLogout();
      navigate(item.path);
    } else {
      navigate(item.path);
    }
  };

  return (
    <div className="mt-10 space-y-6 bg-gray-800 min-h-screen px-6 py-4 text-white">
      {menu.map((item) => (
        <SheetClose key={item.name} asChild>
          <div
            onClick={() => handleMenuClick(item)}
            className="flex items-center gap-3 px-2 py-2 rounded-md cursor-pointer hover:bg-gray-700 transition-colors"
          >
            <span>{item.icon}</span>
            <span className="text-sm font-medium">{item.name}</span>
          </div>
        </SheetClose>
      ))}
    </div>
  );
};

export default SideBar;
