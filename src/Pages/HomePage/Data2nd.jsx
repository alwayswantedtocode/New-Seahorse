import { FaWallet } from "react-icons/fa";
import Value from "../../Svg.images/Picture Icon/Wallet.png"
import Yield from "../../Svg.images/Picture Icon/Signal.png";
import Insurance from "../../Svg.images/Picture Icon/Insurance.png";
import Staking from "../../Svg.images/Picture Icon/Staking.png";

const feature = [
  {
    srcs: Value,
    title: "Value",
    description:
      "Swap from your own wallet. Be your own bank. No contralized bridges or wrapping",
  },
  {
    srcs: Yield,
    title: "Yield",
    description:
      "Provide Liquidity and Earn Yield on your Native Assets with Impermanent Loss",
  },
  {
    srcs: Insurance,
    title: "Insurance",
    description: "Get Impermanent Loss Protection on your Liquidity Pool",
  },
  {
    srcs: Staking,
    title: "Staking",
    description:
      "Earn Yield on your Native Assets with Impermanent Loss Protection",
  },
];
export default feature;
