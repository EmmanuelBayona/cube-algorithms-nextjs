import { DashNavbar } from "@/components/dash-navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-dark min-h-screen text-violet-100 pt-5">
            <DashNavbar />
            {children}
        </div>
    )
}