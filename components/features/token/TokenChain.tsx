"use client";

import { useTokenChain } from "@/hooks/TokenChain";

interface Props {
  params: [string, string]; 
}

const TokenChainComponent = ({ params }: Props) => {
  useTokenChain(params);

  return null;
};

export default TokenChainComponent;
