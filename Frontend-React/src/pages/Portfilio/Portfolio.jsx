/* eslint-disable no-unused-vars */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAssets } from "@/Redux/Assets/Action";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import TreadingHistory from "./TreadingHistory";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentTab, setCurrentTab] = useState("portfolio");
  const { asset } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getUserAssets(localStorage.getItem("jwt")));
  }, []);

  const handleTabChange = (value) => {
    setCurrentTab(value);
  };

  return (
    <div className="px-10 py-5 mt-10 bg-gray-900 min-h-screen text-gray-200">
      {/* Tab Selector */}
      <div className="pb-5 flex items-center gap-5">
        <Select onValueChange={handleTabChange} defaultValue="portfolio">
          <SelectTrigger className="w-[180px] py-[1.2rem] bg-gray-800 text-white border-none">
            <SelectValue placeholder="Select Portfolio" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 text-white">
            <SelectItem value="portfolio">Portfolio</SelectItem>
            <SelectItem value="history">History</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Portfolio Table */}
      {currentTab === "portfolio" ? (
        <Table className="bg-gray-900">
          <TableHeader>
            <TableRow className="bg-gray-800 text-white sticky top-0">
              <TableHead className="py-3 text-white">Assets</TableHead>
              <TableHead className="text-white">PRICE</TableHead>
              <TableHead className="text-white">UNIT</TableHead>
              <TableHead className="text-white">CHANGE</TableHead>
              <TableHead className="text-white">CHANGE(%)</TableHead>
              <TableHead className="text-right text-white">VALUE</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {asset.userAssets?.map((item) => (
              <TableRow
                onClick={() => navigate(`/market/${item.coin.id}`)}
                key={item.id}
                className="hover:bg-gray-800 cursor-pointer transition"
              >
                <TableCell className="font-medium flex items-center gap-2 text-white">
                  <Avatar>
                    <AvatarImage
                      src={item.coin.image}
                      alt={item.coin.symbol}
                    />
                  </Avatar>
                  <span>{item.coin.name}</span>
                </TableCell>
                <TableCell className="text-gray-300">
                  ₹{item.coin.current_price}
                </TableCell>
                <TableCell className="text-gray-300">
                  {item.quantity}
                </TableCell>
                <TableCell
                  className={`${
                    item.coin.price_change_percentage_24h < 0
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  ₹{item.coin.price_change_24h.toFixed(2)}
                </TableCell>
                <TableCell
                  className={`${
                    item.coin.price_change_percentage_24h < 0
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {item.coin.price_change_percentage_24h.toFixed(2)}%
                </TableCell>
                <TableCell className="text-right text-gray-300">
                  ₹{(item.coin.current_price * item.quantity).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <TreadingHistory />
      )}
    </div>
  );
};

export default Portfolio;
