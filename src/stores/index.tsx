import React, { FC, PropsWithChildren, createContext } from "react";
import { container } from "tsyringe";
import CommonStore from "./Common";
import ActionStore from "./Action";
import { Tokens } from "./tokens";

interface StoreProps {
  commonStore: CommonStore;
  ActionStore: ActionStore;
}

interface Props {
  children: PropsWithChildren<React.ReactNode>;
}

// container.registerSingleton(Tokens.Common, CommonStore);
// container.registerSingleton(Tokens.Home, HomeStore);

export const stores = {
  commonStore: new CommonStore(), //container.resolve<CommonStore>(Tokens.Common),
  ActionStore: new ActionStore(), //container.resolve<HomeStore>(Tokens.Home),
};
export const RootStoreContext = createContext<StoreProps>(null!);

const RootStore: FC<Props> = ({ children }: Props) => {
  return <RootStoreContext.Provider value={stores}>{children}</RootStoreContext.Provider>;
};
export default RootStore;
