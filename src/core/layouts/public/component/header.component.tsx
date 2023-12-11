import React from "react";
import { Link } from "react-router-dom";
import { useHeaderStyles } from "./header.style";
import { Routes } from "router/routes";

export default function HeaderComponent() {
    const classes = useHeaderStyles();
  return (
    <div className={classes.headerLogo}>
      <Link to={Routes.default}>Your Logo</Link>
    </div>
  );
}
