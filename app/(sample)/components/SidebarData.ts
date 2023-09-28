import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faBars, faBagShopping, faUser, faGift } from '@fortawesome/free-solid-svg-icons';

type SidebarDataType = {
  id: string;
  icon: IconDefinition;
  link: string;
};

export const SidebarData: SidebarDataType[] = [
  {
    id: 'house',
    icon: faHouse,
    link: '/',
  },
  {
    id: 'bars',
    icon: faBars,
    link: '/',
  },
  {
    id: 'bag',
    icon: faBagShopping,
    link: '/',
  },
  {
    id: 'user',
    icon: faUser,
    link: '/',
  },
  {
    id: 'gift',
    icon: faGift,
    link: '/',
  },
];
