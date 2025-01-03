import * as React from "react"
import { Link, useLocation } from "react-router-dom"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export function MainNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500 to-blue-600 p-6 no-underline outline-none focus:shadow-md"
                    to="/solutions/role-management"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium text-white">
                      Role Management
                    </div>
                    <p className="text-sm leading-tight text-white/90">
                      Streamline role assignments and maintain governance standards
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem to="/solutions/data-governance" title="Data Governance">
                Organize data domains with clear ownership and standards
              </ListItem>
              <ListItem to="/solutions/task-automation" title="Task Automation">
                Create and manage automated workflows
              </ListItem>
              <ListItem to="/pricing" title="Pricing">
                Choose the right plan for your organization
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem to="/products/role-manager" title="Role Manager">
                Streamline role assignments and lifecycle tracking
              </ListItem>
              <ListItem to="/products/domain-governance" title="Domain Governance">
                Maintain clear ownership and policy standards
              </ListItem>
              <ListItem to="/products/task-automation" title="Task Automation">
                Create and manage automated workflows
              </ListItem>
              <ListItem to="/products/compliance" title="Compliance">
                Stay compliant with automated documentation
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Company</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem to="/company/about" title="About">
                Learn about our mission and team
              </ListItem>
              <ListItem to="/company/blog" title="Blog">
                Read our latest insights and updates
              </ListItem>
              <ListItem to="/company/careers" title="Careers">
                Join our growing team
              </ListItem>
              <ListItem to="/company/contact" title="Contact">
                Get in touch with us
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem to="/resources/documentation" title="Documentation">
                Comprehensive guides and API references
              </ListItem>
              <ListItem to="/resources/support" title="Support">
                Access our knowledge base, community, and support tickets
              </ListItem>
              <ListItem to="/resources/training" title="Training">
                Learn best practices and implementation
              </ListItem>
              <ListItem to="/case-studies" title="Case Studies">
                See how others succeed with Parrot
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            to="/pricing"
            className={cn(
              "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50"
            )}
          >
            Pricing
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { to: string }
>(({ className, title, children, to, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref as any}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          to={to}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"