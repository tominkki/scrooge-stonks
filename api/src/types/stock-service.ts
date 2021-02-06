export interface GetDataByTimespan {
  start: Date;
  end: Date;
}

export type GetDataArgs =
  | GetDataByTimespan
  | null;
