//  If it is in a route group, the layout of that route group is shared.
// you can create a different layout for each group by adding a layout.js file inside their folders.
// To create multiple root layouts, remove the top-level layout.js file, and add a layout.js file inside each route groups.

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      this component is (marketing)/layout.tsx
      {children}
    </section>
  );
}
