"use client";

import useNetworkSelector from "@/store/tokenChains/networks";
import { TOKEN_PAGE_PARAMS } from "@/utils/pageParams";
import { useEffect } from "react";

export const useTokenChain = (params: [string, string]) => {
  const { setSelectedChain, availableChains } = useNetworkSelector();

  useEffect(() => {
    const networkParam = params?.[TOKEN_PAGE_PARAMS.NETWORK];

    if (networkParam) {
      const urlNetwork = availableChains.find(
        (chain) => chain.id === networkParam
      );

      if (urlNetwork) {
        setSelectedChain(urlNetwork);
      }
    }
  }, [availableChains, params, setSelectedChain]);
};
