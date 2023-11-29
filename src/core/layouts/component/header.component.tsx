import React from "react";
import { Link } from "react-router-dom";
import { useHeaderStyles } from "./header.style";

export default function HeaderComponent() {
    const classes = useHeaderStyles();
  return (
    <div className={classes.headerLogo}>
      <Link to={"/"}>Your Logo</Link>
    </div>
  );
}
