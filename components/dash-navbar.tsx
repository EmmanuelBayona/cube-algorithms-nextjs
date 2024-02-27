'use client';
import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTriggerStyle } from "./ui/navigation-menu";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";


export const DashNavbar = () => {

    return (
        <NavigationMenu className="mx-auto">
            <NavigationMenuList>

                {/* <NavigationMenuItem> */}
                {/*     <Link href="/dash/timer" legacyBehavior passHref> */}
                {/*         <NavigationMenuLink className={NavigationMenuTriggerStyle()}> */}
                {/*             Timer */}
                {/*         </NavigationMenuLink> */}
                {/*     </Link> */}
                {/* </NavigationMenuItem> */}

                <NavigationMenuItem>
                    <Link href="/dash/puzzles" legacyBehavior passHref>
                        <NavigationMenuLink className={NavigationMenuTriggerStyle()}>
                            Algorithms
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>


                <SignedIn>
                    <NavigationMenuItem>
                        <Link href="/dash/profile" legacyBehavior passHref>
                            <NavigationMenuLink className={NavigationMenuTriggerStyle()}>
                                Profile
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </SignedIn>

                <NavigationMenuItem>
                    <SignedIn>
                        <div className="mr-2">
                            <UserButton afterSignOutUrl="/dash/puzzles" />
                        </div>
                    </SignedIn>

                    <SignedOut>
                        <SignInButton mode="modal" afterSignInUrl="/dash/puzzles" afterSignUpUrl="/dash/puzzles">
                            <Button variant='primary' className="h-10">
                                Sign in
                            </Button>
                        </SignInButton>
                    </SignedOut>

                </NavigationMenuItem>

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
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/5 focus:bg-white/5",
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
