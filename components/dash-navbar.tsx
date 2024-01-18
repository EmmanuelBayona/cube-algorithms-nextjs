'use client';
import Link from "next/link";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuTriggerStyle } from "./ui/navigation-menu";
import { CubeIcon } from "@radix-ui/react-icons";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";


export const DashNavbar = () => {

    return (
        <NavigationMenu className="mx-auto">
            <NavigationMenuList>

                <NavigationMenuItem>
                    <Link href="/dash/timer" legacyBehavior passHref>
                        <NavigationMenuLink className={NavigationMenuTriggerStyle()}>
                            Timer
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Algorithms</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                            <li className='row-span-3 bg-dark-accent rounded-lg'>
                                <NavigationMenuLink asChild>
                                    <Link
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/dash/puzzles/3x3"
                                    >
                                        <CubeIcon width={24} height={24}/>
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            3X3
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            F2L, OLL, PLL, and more.
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                                <ListItem href="/" title="2X2">
                                    Beginner&apos;s method, Ortega, CLL, EG, and more.
                                </ListItem>
                                <ListItem href="/" title="4X4">
                                    Beginner&apos;s method, Yau, Hoya, Yau, and more.
                                </ListItem>
                                <ListItem href="/" title="Square-1">
                                    Beginner&apos;s method, WCA, and more.
                                </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                
                <SignedIn>
                    <NavigationMenuItem>
                        <Link href="profile" legacyBehavior passHref>
                            <NavigationMenuLink className={NavigationMenuTriggerStyle()}>
                                Profile
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </SignedIn>

                <NavigationMenuItem>
                    <SignedIn>
                        <div className="mr-2">
                            <UserButton afterSignOutUrl="/" />
                        </div>
                    </SignedIn>

                    <SignedOut>
                        <SignInButton mode="modal" afterSignInUrl="/dash/timer" afterSignUpUrl="/dash/timer">
                            <Button variant='primary' className="h-10">
                                Sign in
                            </Button>
                        </SignInButton>
                    </SignedOut>

                </NavigationMenuItem>



                {/* <NavigationMenuItem className="hidden lg:block">
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={NavigationMenuTriggerStyle()}>
                            Statistics
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem> */}

            </NavigationMenuList>
        </NavigationMenu>
    )

}

const ListItem = forwardRef<
    ElementRef<typeof Link>,
    ComponentPropsWithoutRef<typeof Link>
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-dark-accent focus:bg-dark-accent",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-violet-100/70">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"