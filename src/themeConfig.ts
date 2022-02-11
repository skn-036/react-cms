interface Menu {
  collapsed: boolean;
  hidden: boolean;
}

export const layout: string = 'vertical'; // vertical/horizontal
export const theme: string = 'dark'; // dark/ light/ semi-dark
export const menu: Menu = {
  collapsed: true, // collapsed/open
  hidden: true,
};