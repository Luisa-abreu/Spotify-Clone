export type ParametroRotasStack = {
  InitialPage: undefined;
  Login: undefined;
  Home: undefined;
};

export type ParametroRotasTabs = {
  Home: undefined;
  Search: undefined;
  Library: undefined;
  Premium: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ParametroRotasStack {}
  }
}
