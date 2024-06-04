"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import {
  Grid,
}from "@radix-ui/themes"


export default function Home() {
  return (
    <body>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <div className="mr-4 hidden md:flex">
            <a className="container flex h-14 max-w-screen-2xl items-center"href="/">
              <span className="hidden font-bold sm:inline-block">IoT-Dashboard</span>
            </a>
            <nav className="flex items-center gap-4 text-sm lg:gap-6">
              
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Devices</NavigationMenuTrigger>
                    <NavigationMenuContent className="flex flex-col gap-2 p-3">
                      <NavigationMenuLink className="flex items-center gap-2 rounded-md p-2 transition-colors hover:bg-accent">
                        <div className="flex size-6 items-center justify-center bg-primary/50">
                          icon
                        </div>
                        <span >Air&nbsp;Conditioner</span>
                      </NavigationMenuLink>
                      <NavigationMenuLink>
                        <span>Link</span>
                      </NavigationMenuLink>
                      <NavigationMenuLink>
                        <span>Link</span>
                      </NavigationMenuLink>
                      <NavigationMenuLink>
                        <span>Link</span>
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Routine</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <NavigationMenuLink>Link</NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
          </div>
        </div>

      </header>
      <main className='min-h-screen w-full bg-background '>
        <div className="container ">
        </div>

      </main>
    </body>
    );
    
    
}

