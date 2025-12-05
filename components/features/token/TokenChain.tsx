"use client";

import { useTokenChain } from "@/hooks/TokenChain";

interface Props {
  params: IParam;
}

type IParam = {
  params: [string, string];
};


const TokenChainComponent = ({ params }: Props) => {
  useTokenChain(params);

  return null;
};

export default TokenChainComponent;
