'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { ReactNode } from "react";
import TokenSummary from "./TokenSummary";
import TokenMarkets from "./Token-markets";
import TokenScoring from "./Token-scoring";
import TokenSecurityOldShit from "./TokenSecurity-old-shit/TokenSecurity";
import RenderConditionalComponent from "@/components/common/RenderConditionalComponent";
import TokenHolders from "./TokenHolders-old-dex/TokenHolders";
import type { IToken } from "@/types/token.type";
import TokenOverview from "./token-overview";
import { merge } from "@/utils/merger";
import { useQuery } from "@tanstack/react-query";
import { getToken } from "@/services/http/token.http";
import { IoMdInformationCircleOutline } from "react-icons/io";
import ChartSvg from "@/components/svg/ChartSvg";
import HolderSvg from "@/components/svg/HolderSvg";
import SecuritySvg from "@/components/svg/SecuritySvg";
import ScoringSvg from "@/components/svg/ScoringSvg";

interface Props {
  token: IToken;
    tokenData: IToken;
  network: string;
  tokenAddress: string;
}

function MobileNavigator({
  token: tokenDataFromServer,
  tokenAddress,
  network,
  tokenData
}: Props) {
  const token = merge(tokenDataFromServer, tokenData) as IToken;

  const CustomizedTabTrigger = ({
    value,
    children,
  }: {
    value: string;
    children: ReactNode;
  }) => {
    return (
      <TabsTrigger
        value={value}
        className="data-[state=active]:border-b-0 data-[state=active]:text-foreground w-full no-scrollbar data-[state=active]:bg-border py-3 rounded-lg flex-col gap-1 text-foreground"
      >
        {children}
      </TabsTrigger>
    );
  };

  return (
    <Tabs
      id="token-page"
      defaultValue="overview"
      className="w-full no-scrollbar"
    >
      <TabsList className="token-tabs p-2 m-0 w-full overflow-y-scroll flex items-center justify-start">
        <CustomizedTabTrigger value="overview">
          <div>
            <IoMdInformationCircleOutline className="text-2xl" />
          </div>
          <div className="ml-1">Overview</div>
        </CustomizedTabTrigger>
        <CustomizedTabTrigger value="chart">
          <ChartSvg />
          <span className="ml-1">Chart + Txns</span>
        </CustomizedTabTrigger>
        <CustomizedTabTrigger value="holders">
          <HolderSvg />
          <span className="ml-1">Holders</span>
        </CustomizedTabTrigger>
        <CustomizedTabTrigger value="security">
          <SecuritySvg />
          <span className="ml-1">Security</span>
        </CustomizedTabTrigger>
        <CustomizedTabTrigger value="markets">
          <ScoringSvg />
          <span className="ml-1">Scoring</span>
        </CustomizedTabTrigger>
        {/* <TabsTrigger  value="scoring">
          <FaRankingStar />
          <span className="ml-1">Scoring</span>
        </TabsTrigger> */}
      </TabsList>
      <TabsContent value="overview" className="mt-5 !-px-0 ">
        <TokenOverview
          token={token}
          tokenAddress={tokenAddress}
          network={network}
        />
      </TabsContent>
      <TabsContent value="chart" className="mt-5">
        <TokenSummary
          token={token}
          tokenAddress={tokenAddress}
          network={network}
        />
      </TabsContent>
      <TabsContent value="markets" className="mt-5">
        <TokenMarkets token={token} tokenAddress={tokenAddress} />
        <TokenScoring token={token} />
      </TabsContent>
      <TabsContent value="security" className="mt-5">
        <TokenSecurityOldShit token={token} tokenAddress={tokenAddress} />
      </TabsContent>
      <TabsContent value="holders" className="mt-5">
        <RenderConditionalComponent
          value={true}
          options={{
            trueValueComponent: (
              <TokenHolders token={token} tokenAddress={tokenAddress} />
            ),
            // falseValueComponent: <Paywall />,
          }}
        />
      </TabsContent>
    </Tabs>
  );
}

export default MobileNavigator;
