import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ApplicationForm } from "@/components/application-form"

export default function ApplicationsNewPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <div className="bg-primary text-primary-foreground py-8">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-2xl md:text-3xl font-bold">자격시험 원서접수</h1>
            <p className="mt-2 text-primary-foreground/80">
              정책분석사 자격시험 원서접수 페이지입니다. 아래 양식을 작성해주세요.
            </p>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="bg-muted border-b border-border">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <nav className="text-sm text-muted-foreground">
              <span className="hover:text-foreground cursor-pointer">홈</span>
              <span className="mx-2">/</span>
              <span className="hover:text-foreground cursor-pointer">원서접수</span>
              <span className="mx-2">/</span>
              <span className="text-foreground font-medium">신규 접수</span>
            </nav>
          </div>
        </div>

        {/* Form Content */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          <ApplicationForm />
        </div>
      </main>

      <Footer />
    </div>
  )
}
