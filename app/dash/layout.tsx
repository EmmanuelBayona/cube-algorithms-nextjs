import { DashNavbar } from "@/components/dash-navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-black min-h-screen pt-5 text-violet-100">
            <DashNavbar />
            {children}
        </div>
    )
}