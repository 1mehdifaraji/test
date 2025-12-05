"use client";

import useNetworkSelector from "@/store/tokenChains/networks";
import { TOKEN_PAGE_PARAMS } from "@/utils/pageParams";
import { useEffect } from "react";

export const useTokenChain = ({params} : {params: [string, string];}) => {
  const { setSelectedChain, availableChains } = useNetworkSelector();

  useEffect(() => {
    if (params && params[TOKEN_PAGE_PARAMS.NETWORK]) {
      const urlNetwwork = availableChains.find(
        (chain) => chain.id ===  params[TOKEN_PAGE_PARAMS.NETWORK]
      );

      if (urlNetwwork) setSelectedChain(urlNetwwork);
    }
  }, [availableChains, params, setSelectedChain]);

   return null
}


