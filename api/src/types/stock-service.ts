export interface getDataByTimespan {
  start: Date;
  end: Date;
};

export type getDataArgs =
  | getDataByTimespan
  | null;
