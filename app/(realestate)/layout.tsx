import MarketingLayout from "app/(marketing)/layout"
import React from "react"

const layout = ({ children }: { children: React.ReactNode }) => {
  return <MarketingLayout>{children}</MarketingLayout>
}

export default layout
