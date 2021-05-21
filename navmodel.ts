export type ServerId = string;

export interface EvsNavNode {
  id: string;
  icon?: string;
  text?: string;
}

export interface EvsNavRoute extends EvsNavNode {
  componentId: string;
  parameters?: Object;
}

export interface EvsNavModel extends EvsNavNode {
  routes: EvsNavRoute[];
}
