# Headless Sidebar

Reusable menu components built with **React, TypeScript and Tailwind CSS**.

The project provides two layers:

- **HeadlessMenu** — menu behavior without routing.
- **RouterMenu** — React Router integration with a ready-to-use compound component API.

## Features

* Expanded / collapsed states.
* Nested submenus.
* Click-to-open in expanded mode.
* Hover-to-open in collapsed mode.
* Active parent and submenu states.
* Controlled and uncontrolled state.
* Responsive mobile behavior.
* JSX-based composition.
* Optional React Router integration.
* Compound component API.

## HeadlessMenu

`HeadlessMenu` provides menu behavior without depending on a router.

```tsx
<HeadlessMenuProvider
  collapsed={collapsed}
  onCollapsedChange={setCollapsed}
  activeIds={activeIds}
  onActiveChange={setActiveIds}
>
  <HeadlessMenu>
    <HeadlessMenuItem
      id="trends"
      label="Trends"
    />

    <HeadlessMenuItem
      id="clients"
      label="Clients"
    >
      <HeadlessMenuItem
        id="list"
        label="List"
      />

      <HeadlessMenuItem
        id="reviews"
        label="Reviews"
      />
    </HeadlessMenuItem>
  </HeadlessMenu>
</HeadlessMenuProvider>
```

Routing is not required. Selection and navigation can be handled by the consumer through onSelect.

## RouterMenu

RouterMenu adds React Router integration on top of HeadlessMenu.

It provides navigation and active route detection automatically.

```tsx
<RouterMenu>
  <RouterMenu.Item
    to="/trends"
    label="Trends"
  />

  <RouterMenu.Group
    to="/clients"
    label="Clients"
  >
    <RouterMenu.Item
      to="/clients/list"
      label="List"
    />

    <RouterMenu.Item
      to="/clients/reviews"
      label="Reviews"
    />
  </RouterMenu.Group>

  <RouterMenu.Item
    to="/payments"
    label="Payments"
  />
</RouterMenu>
```
The application does not need to manage menu IDs, active state or navigation handlers.

## Styling

Menu behavior and structural styles are handled internally by the components.

Product-level visual styles can be configured through the shared MenuStyles configuration.

This keeps implementation details such as submenu positioning, tooltips and internal selectors out of application code.

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
