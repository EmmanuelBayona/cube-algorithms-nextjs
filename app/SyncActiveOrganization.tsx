"use client"
import { useAuth, useOrganizationList } from "@clerk/nextjs"
import { useEffect } from "react";

// in clerk you can have the same user in multiple organizations simultaneously,
// so we need to sync an active organization, which is organization that the user is logged in
// right now, and as we just have 1 organization that is the admin one, we can just set the active
// organization to the first one that the user is in.

// to get this organization id, we need to custom our session token in clerk, to include the organization 
// the custom prop is called membership, and it is in the sessionClaims object, that we get from the auth() hook

export const SyncActiveOrganization = ({ membership }: { membership?: Record<string, string> }) => {

    const { setActive, isLoaded } = useOrganizationList();
    const { orgId } = useAuth();

    const firstOrgId = Object.keys(membership ?? {})?.[0];

    useEffect(() => {
        if (!isLoaded) return;
        if (!orgId && firstOrgId) {
            void setActive({ organization: firstOrgId })
        }
    }, [isLoaded, setActive, orgId, firstOrgId])

    return null

}
