export const cropWallet = (wallet: string) =>
  `${wallet.substring(0, 4)}...${wallet.substring(
    wallet.length - 4,
    wallet.length
  )}`;