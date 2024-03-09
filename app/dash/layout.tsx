import { DashNavbar } from "@/components/dash-navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen text-white pt-5">
            <DashNavbar />
            {children}
        </div>
    )
}
