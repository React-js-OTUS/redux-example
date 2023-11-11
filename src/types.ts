export type SubItem = {
  id: string;
  count: number;
  name: string;
};

export type Item = {
  id: string;
  count: number;
  name: string;
  children: SubItem[];
};

export type Items = Item[];
