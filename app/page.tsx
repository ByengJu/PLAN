import { Header } from "@/components/header"
import { HeroBanner } from "@/components/hero-banner"
import { QuickMenu } from "@/components/quick-menu"
import { NoticeBoard } from "@/components/notice-board"
import { ExamSchedule } from "@/components/exam-schedule"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroBanner />
        <QuickMenu />
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="lg:col-span-1">
            <NoticeBoard />
          </div>
          <div className="lg:col-span-1">
            <ExamSchedule />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
