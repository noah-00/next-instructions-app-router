import React from "react";

// This means that project files can be safely colocated inside route segments in the app directory without accidentally being routable.
// so /dashboard/_libNotRoutable.tsx/page.tsx is not routable
export default function Page() {
  return <div>Page</div>;
}
