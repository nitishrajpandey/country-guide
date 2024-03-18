import { trefoil } from "ldrs";
import React from "react";

function Loding() {
  trefoil.register();
  return (
    <l-trefoil
      size="140"
      stroke="4"
      stroke-length="0.15"
      bg-opacity="0.1"
      speed="1.4"
      color="black"
    ></l-trefoil>
  );
}

export default Loding;
