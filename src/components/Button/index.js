import React from "react";
import { Link, Button } from "./styles.js";

function ButtonComponent({ href, children, size="small" }) {
  return href ? (
    <Link href={href} size={size}>
      {children}{" "}
    </Link>
  ) : (
    <Button size={size}>{children}</Button>
  );
}

export default ButtonComponent;
