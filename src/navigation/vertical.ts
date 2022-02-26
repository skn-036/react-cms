import { Menus } from "../models/sidebar";

const menus: Menus[] =  [
  {
    title: 'Chat',
    path: '/chat',
    hasChildren: false,
  },
  {
    title: 'Tools',
    path: '/tools',
    hasChildren: true,
    children: [
      {
        title: 'Kanabn',
        path: '/tools/kanban',
        hasChildren: false,
      },
      {
        title: 'Todo',
        path: 'tools/todo',
        hasChildren: false,
      },
    ]
  },
  {
    title: 'Profile',
    path: 'tools/profile',
    hasChildren: false,
  },
];

export default menus;