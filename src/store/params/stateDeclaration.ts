export interface IParam {
  name: string,
  value: string,
  measureUnit: string,
  description: string,
  sectionId: number,
  groupId?: number[],
  type: number,
  accessMask: number,
  maxLen?: number
  access: string
  trapMask?: number,
  colorId?: number,
  colorDuration?: number,
  colorTime?: number,
  degradeColorId?: number,
  failureColorId?: number,
  relations?: string[],
}