export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      this is app/template.tsx
      {children}
    </div>
  );
}

// template.tsx is like tihs
// <Layout>
//  <Template key={routeParam}>{children}</Template>
// </Layout>

// if you want to use useEffect or useState or css animation, you can use template.tsx.
