export type BigNumber = {
    type: string;
    hex: string;
};

export type BuyoutCurrencyValue = {
    name: string;
    symbol: string;
    decimals: number;
    value: BigNumber;
    displayValue: string;
};

export type Asset = {
    name: string;
    description: string;
    image: string;
    id: string;
    uri: string;
};

export type TicketListingItem = {
    assetContractAddress: string;
    buyoutPrice: BigNumber;
    currencyContractAddress: string;
    buyoutCurrencyValuePerToken: BuyoutCurrencyValue;
    id: string;
    tokenId: BigNumber;
    quantity: BigNumber;
    startTimeInSeconds: BigNumber;
    asset: Asset;
    secondsUntilEnd: BigNumber;
    sellerAddress: string;
    type: number;
};
