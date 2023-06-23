import React from "react";

export default function NavItem({ url, label }) {
  return (
    <li>
      <a className="active" href={url}>
        {label}
      </a>
    </li>
  );
}
