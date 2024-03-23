import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { FuelWalletProvider } from "@fuel-wallet/sdk";
import { useAccount, useDisconnect, useFuel } from "@fuels/react";
import { defaultConfig } from "bsafe";
import copy from "copy-to-clipboard";
import { bn } from "fuels";
import { observer } from "mobx-react";

import Divider from "@components/Divider";
import { Column, Row } from "@components/Flex";
import SizedBox from "@components/SizedBox";
import Text, { TEXT_TYPES } from "@components/Text";
import Tooltip from "@components/Tooltip";
import copyIcon from "@src/assets/icons/copy.svg";
import linkIcon from "@src/assets/icons/link.svg";
import logoutIcon from "@src/assets/icons/logout.svg";
import BN from "@src/utils/BN";
import { getExplorerLinkByAddress } from "@src/utils/getExplorerLink";
import { useStores } from "@stores";

import ConnectedWalletButton from "./ConnectedWalletButton";

const ConnectedWallet: React.FC = observer(() => {
  const { accountStore, blockchainStore, notificationStore, balanceStore } = useStores();
  const { account } = useAccount();
  const { disconnect: fuelDisconnect } = useDisconnect();
  const { fuel } = useFuel();
  const [isFocused, setIsFocused] = useState(false);
  const [fuelBalance, setFuelBalance] = useState<string | undefined>();

  async function getBalance() {
    if (!account) return;

    const provider = await FuelWalletProvider.create(defaultConfig["PROVIDER"]!);
    const wallet = await fuel.getWallet(account, provider);
    const balance = await wallet.getBalance();

    console.log(balance);

    setFuelBalance(
      bn(bn.parseUnits(balance.format() ?? "0.0000")).format({
        precision: 4,
      }),
    );
  }

  useEffect(() => {
    getBalance();
  }, [account]);

  const bcNetwork = blockchainStore.currentInstance;

  const ethBalance = BN.formatUnits(
    balanceStore.getBalance(bcNetwork!.getTokenBySymbol("ETH").assetId) ?? fuelBalance,
    bcNetwork!.getTokenBySymbol("ETH").decimals,
  )?.toFormat(4);

  const handleAddressCopy = () => {
    accountStore.address && copy(accountStore.address);
    account && copy(account);
    notificationStore.toast(`Your address was copied`, { type: "info" });
  };

  const actions = [
    {
      icon: copyIcon,
      action: handleAddressCopy,
      title: "Copy address",
      active: true,
    },
    {
      icon: linkIcon,
      action: () => window.open(getExplorerLinkByAddress(account ?? accountStore.address!, bcNetwork!.NETWORK_TYPE)),
      title: "View in Explorer",
      active: true,
    },
    {
      icon: logoutIcon,
      action: () => {
        fuelDisconnect();
        accountStore.disconnect();
      },
      title: "Disconnect",
      active: true,
    },
  ];

  const renderActions = () => {
    return actions.map(
      ({ title, action, active, icon }) =>
        active && (
          <ActionRow key={title} onClick={action}>
            <Icon alt="ETH" src={icon} />
            <Text type={TEXT_TYPES.BUTTON_SECONDARY}>{title}</Text>
          </ActionRow>
        ),
    );
  };

  return (
    <Tooltip
      config={{
        placement: "bottom-start",
        trigger: "click",
        onVisibleChange: setIsFocused,
      }}
      content={
        <Column crossAxisSize="max">
          <ActionRow>
            <Icon alt="ETH" src={bcNetwork?.getTokenBySymbol("ETH").logo} />
            <SizedBox width={8} />
            <Text type={TEXT_TYPES.BUTTON_SECONDARY}>{`${account ? fuelBalance : ethBalance} ETH`}</Text>
          </ActionRow>
          <Divider />
          {renderActions()}
        </Column>
      }
    >
      <ConnectedWalletButton isFocused={isFocused} />
    </Tooltip>
  );
});

export default ConnectedWallet;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const ActionRow = styled(Row)`
  padding: 8px 16px;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  transition: background-color 150ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.borderPrimary};
  }
`;
