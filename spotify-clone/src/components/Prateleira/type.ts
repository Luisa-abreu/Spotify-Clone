interface DataItem {
  id: string | number;
  title: string;
  image: string;
  type: string;
}

export interface PropsPrateleira {
  title: string;
  data: DataItem[];
  filterType?: DataItem["type"];
}
