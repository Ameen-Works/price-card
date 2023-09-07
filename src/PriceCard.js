import React from "react";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import "./PriceCard.css";

export default function PriceCard({ plan, payment }) {
  return (
    <div className="price-card-container">
      <header className="price-card-plan">{plan}</header>
      <div className="payment">{payment}</div>
      <div className="divider"></div>
      <ul>
        <li>
          <TiTick />
          {plan !== "PRO"
            ? plan === "FREE"
              ? "Single User"
              : "5 Users"
            : "Unlimited User"}
        </li>
        <li>
          <TiTick />
          50GB Storage
        </li>
        <li>
          <TiTick />
          Unlimited Public Projects
        </li>

        <li>
          <TiTick />
          Community Access
        </li>
        <li className={plan !== "FREE" ? "" : "greyed"}>
          {plan !== "FREE" ? <TiTick /> : <RxCross2 />}
          Unlimited Private Projects
        </li>
        <li className={plan !== "FREE" ? "" : "greyed"}>
          {plan !== "FREE" ? <TiTick /> : <RxCross2 />}
          Dedicated Phone Support
        </li>
        <li className={plan !== "FREE" ? "" : "greyed"}>
          {plan !== "FREE" ? <TiTick /> : <RxCross2 />}
          FREE Subdomain
        </li>
        <li className={plan === "PRO" ? "" : "greyed"}>
          {plan !== "PRO" ? <RxCross2 /> : <TiTick />}
          Monthly Status Reports
        </li>
      </ul>
    </div>
  );
}
