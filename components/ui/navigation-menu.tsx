'use client';
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ElementRef, forwardRef, ComponentPropsWithoutRef } from "react";

export const NavigationMenu = forwardRef<
    ElementRef<typeof NavigationMenuPrimitive.Root>,
    ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Root
        ref={ref}
        className={cn('relative z-10 max-w-max flex-1 items-center justify-center text-white rounded-xl bg-dark border border-white/5 p-1', className)}
        {...props}
    >
        {children}
        <NavigationMenuViewport />
    </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

export const NavigationMenuList = forwardRef<
    ElementRef<typeof NavigationMenuPrimitive.List>,
    ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.List
        ref={ref}
        className={cn('group flex flex-1 list-none items-center justify-center gap-1 md:gap-2', className)}
        {...props}
    />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

export const NavigationMenuItem = NavigationMenuPrimitive.Item;

export const NavigationMenuTriggerStyle = cva(
    'group inline-flex h-10 w-max items-center justify-center rounded-lg px-4 py-2 text-sm font-medium hover:bg-white/5 focus:bg-white/5 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/5 data-[state=open]:bg-white/5'
)

export const NavigationMenuTrigger = forwardRef<
    ElementRef<typeof NavigationMenuPrimitive.Trigger>,
    ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Trigger
        ref={ref}
        className={cn(NavigationMenuTriggerStyle(), "group", className)}
        {...props}
    >
        {children}{" "}
        <ChevronDownIcon
            width={12}
            height={12}
            className='relative top-[1px] ml-1 transition duration-200 group-data-[state=open]:rotate-180'
            aria-hidden='true'
        />
    </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

export const NavigationMenuContent = forwardRef<
    ElementRef<typeof NavigationMenuPrimitive.Content>,
    ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Content
        ref={ref}
        className={cn(
            'left-0 top-0 w-full data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight md:absolute md:w-auto',
            className
        )}
        {...props}
    />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

export const NavigationMenuLink = NavigationMenuPrimitive.Link

export const NavigationMenuViewport = forwardRef<
    ElementRef<typeof NavigationMenuPrimitive.Viewport>,
    ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
    <div className={cn('absolute left-0 top-full flex justify-center')}>
        <NavigationMenuPrimitive.Viewport
            className={cn(
                'origin-[top_center] relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-xl border border-white/5 bg-dark data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut md:w-[var(--radix-navigation-menu-viewport-width)]',
                className
            )}
            ref={ref}
            {...props}
        />
    </div>
))
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName

export const NavigationMenuIndicator = forwardRef<
    ElementRef<typeof NavigationMenuPrimitive.Indicator>,
    ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Indicator
        ref={ref}
        className={cn(
            'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
            className
        )}
        {...props}
    >
        <div className='relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-white/5' />
    </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName
