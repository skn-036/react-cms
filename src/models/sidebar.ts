export interface Menus {
  title: string
  path: string
  hasChildren: boolean
  children?: Menus[]
}