# Headless Sidebar

Reusable headless sidebar built with **React, TypeScript and Tailwind CSS**.

The component provides interaction logic only. Styling, routing and application state remain in the consumer.

## Features

* Expanded / collapsed states.
* Nested submenus.
* Click-to-open in expanded mode.
* Hover-to-open in collapsed mode.
* Active parent and submenu states.
* Controlled and uncontrolled state.
* Responsive mobile behavior.
* JSX-based composition.
* No dependency on React Router.

## API

### `SidebarProvider`

Controls sidebar state:

```tsx
<SidebarProvider
  collapsed={collapsed}
  onCollapsedChange={setCollapsed}
  activeIds={activeIds}
  onActiveChange={setActiveIds}
>
  ...
</SidebarProvider>
```

### `SidebarItem`

Defines menu items and nested submenus:

```tsx
<SidebarItem
  id="clients"
  icon={<Users />}
  label="Clients"
  onSelect={() => navigate("/clients")}
>
  <SidebarItem
    id="list"
    label="List"
    onSelect={() => navigate("/clients/list")}
  />
</SidebarItem>
```

### State vs selection

* `activeIds` / `onActiveChange` — controls which items are active.
* `onSelect` — notifies the consumer that an item was selected.

This keeps routing and other application logic outside the headless component.

## React Router

Routing is implemented only in the consumer:

```tsx
<SidebarItem
  id="trends"
  label="Trends"
  onSelect={() => navigate("/trends")}
/>
```

`SidebarItem` does not depend on React Router.

## Styling

The sidebar has no predefined visual styles. Pass Tailwind classes through `className`.

```tsx
<SidebarItem
  id="trends"
  label="Trends"
  className={sidebarItemStyles}
/>
```

Shared Tailwind classes can be extracted into constants to avoid repetition.

## Installation

Install dependencies:

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at the URL shown by Vite in the terminal, typically:

```text
http://localhost:5173
```

## Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```
