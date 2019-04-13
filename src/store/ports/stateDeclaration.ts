export interface IPort {
  name: string,
  description: string,
  direction: number,
  colorId: number,
  groupId: number[],
  params: string[],
}