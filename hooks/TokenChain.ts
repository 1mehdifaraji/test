"use client";

import useNetworkSelector from "@/store/tokenChains/networks";
import { TOKEN_PAGE_PARAMS } from "@/utils/pageParams";
import { useEffect } from "react";

interface Props {
  params: IParam;
}

type IParam = {
  params: [string, string];
};

export const useTokenChain = ({params} : Props) => {
  const { setSelectedChain, availableChains } = useNetworkSelector();

  useEffect(() => {
    if (params && params.params && params.params[TOKEN_PAGE_PARAMS.NETWORK]) {
      const urlNetwwork = availableChains.find(
        (chain) => chain.id === params.params[TOKEN_PAGE_PARAMS.NETWORK]
      );

      if (urlNetwwork) setSelectedChain(urlNetwwork);
    }
  }, [availableChains, params, setSelectedChain]);

   return null
}


