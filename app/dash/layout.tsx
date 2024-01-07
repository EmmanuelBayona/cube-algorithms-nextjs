import { DashNavbar } from "@/components/dash-navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-black min-h-screen">
            <DashNavbar />
            {children}
        </div>
    )
}