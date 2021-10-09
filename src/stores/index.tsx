import React, { FC, PropsWithChildren, createContext } from "react";
import { container } from "tsyringe";
import CommonStore from "./Common";
import HomeStore from "./Home";
import moduleStore from "./moduleConfig";
import { Tokens } from "./tokens";

interface StoreProps {
  commonStore: CommonStore;
  homeStore: HomeStore;
  moduleStore:moduleStore;
}

interface Props {
  children: PropsWithChildren<React.ReactNode>;
}

// container.registerSingleton(Tokens.Common, CommonStore);
// container.registerSingleton(Tokens.Home, HomeStore);

export const RootStoreContext = createContext<StoreProps>(null!);

const RootStore: FC<Props> = ({ children }: Props) => {
  const stores = {
    commonStore: new CommonStore(), //container.resolve<CommonStore>(Tokens.Common),
    homeStore: new HomeStore(), //container.resolve<HomeStore>(Tokens.Home),
    moduleStore:new moduleStore()
  };

  return (
    <RootStoreContext.Provider value={stores}>
      {children}
    </RootStoreContext.Provider>
  );
};
export default RootStore;
