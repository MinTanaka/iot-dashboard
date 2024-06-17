"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
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
                    <NavigationMenuTrigger className="bg-transparent">Devices</NavigationMenuTrigger>
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
                    <NavigationMenuTrigger className="bg-transparent">Routine</NavigationMenuTrigger>
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
      <main className='mt-10 min-h-screen w-full bg-background'>
        <div className="container max-w-[1400px]">
          <div className="mb-4 grid grid-cols-1 gap-6  md:grid-cols-3">
              <div className="flex flex-col gap-4 rounded-lg border-2 border-border p-6">
                <h2 className="text-xl font-bold">Air Conditioner</h2>
                <div className="flex items-center justify-between">
                  Status
                  <div className="flex items-center gap-2 text-green-500">
                    Online
                    <span className="size-2.5 rounded-full bg-green-500" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  Mode
                  <span>Cool</span>
                </div>
                <div className="flex items-center justify-between">
                  Target Temperature
                  <span>24°C</span>
                </div>
                <div className="flex items-center justify-between">
                  <Button variant={"destructive"}>Turn Off</Button>
                </div>
              </div>
            <div className="flex flex-col gap-4 rounded-lg border-2 border-border bg-background/95  p-6">
              <h2 className="text-xl font-bold">Device</h2>
              <div className="flex items-center justify-between">
                <span>Device Name</span>
                <span>Device Status</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Device Name</span>
                <span>Device Status</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Device Name</span>
                <span>Device Status</span>
              </div>
              <div className="flex items-center justify-between">
                <button>Button 1</button>
                <button>Button 2</button>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-lg border-2 border-border bg-background/95  p-6">
              <h2 className="text-xl font-bold">Device</h2>
              <div className="flex items-center justify-between">
                <span>Device Name</span>
                <span>Device Status</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Device Name</span>
                <span>Device Status</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Device Name</span>
                <span>Device Status</span>
              </div>
              <div className="flex items-center justify-between">
                <button>Button 1</button>
                <button>Button 2</button>
              </div>
            </div>
          </div>
        </div>

      </main>
    </body>
  );
    
    
}

