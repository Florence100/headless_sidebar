import type { MenuStyles } from "../components/headless-menu/types/types";

export const menuStyles: MenuStyles = {
  menu: `
    flex
    flex-col
    h-screen
    gap-2
    bg-gray-100
    p-2
    transition-all
    duration-300
  `,

  // Menu item without nested submenus
  item: `
    cursor-pointer 
    relative 

    data-[active=true]:text-blue-500 

    [&_.menu]:flex 
    [&_.menu]:items-center
    [&_.menu]:gap-2 
    [&_.menu]:px-2
    [&_.menu]:rounded 
    [&_.menu]:min-h-8
    [&_.menu]:hover:bg-gray-200 

    [&_.menu]:min-h-9

    [&_.tooltip]:absolute 
    [&_.tooltip]:right-[-16px] 
    [&_.tooltip]:top-2 
    [&_.tooltip]:translate-x-[100%] 
    [&_.tooltip]:pointer-events-none 
    [&_.tooltip]:font-semibold
  `,

  // Menu item with a nested submenu
  group: `
    cursor-pointer 
    data-[active=true]:text-blue-500 
    relative

    [&_.menu]:flex 
    [&_.menu]:gap-2 
    [&_.menu]:p-2 
    [&_.menu]:rounded 
    [&_.menu]:min-h-8 
    [&_.menu]:hover:bg-gray-200 

    [&[data-collapsed=true]]:absolute
    [&[data-collapsed=true]]:top-0 
    [&[data-collapsed=true]]:right-0 
    [&[data-collapsed=true]]:translate-x-[100%] 
    [&[data-collapsed=true]]:p-2 
    [&[data-collapsed=true]]:rounded 
    [&[data-collapsed=true]]:bg-gray-100 
    [&[data-collapsed=true]]:border 
    [&[data-collapsed=true]]:border-gray-300 

    [&[data-open=true]]:flex
    [&[data-open=true]]:flex-col
    [&[data-open=true]]:items-start
    [&[data-open=false]]:hidden

    [&_.submenu]:pl-8

    [&_.submenu-title]:font-semibold
    [&_.submenu-title]:text-start
    [&_.submenu-title]:p-2
    [&_.submenu-title]:cursor-auto
  `,

  // Submenu item
  submenuItem: `
    cursor-pointer
    data-[active=false]:text-[#6b6375] 
    [&:has(.submenu-item)]:rounded
    hover:bg-gray-200 
    p-2
    w-full
    text-start
  `,

  // Toggle button
  toggle: `
    absolute
    bottom-2
    left-2
    cursor-pointer
    rounded
    p-2
    hover:bg-gray-200
  `,
} as const;