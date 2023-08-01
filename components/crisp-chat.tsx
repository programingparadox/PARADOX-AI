"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("bb5c3494-471b-488b-8597-9166367e42b3");
  }, [])

  return null;
}

export default CrispChat