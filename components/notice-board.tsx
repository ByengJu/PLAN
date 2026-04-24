import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Pin } from "lucide-react"

const notices = [
  {
    id: 1,
    title: "2024년 제2회 정책분석사 자격시험 시행 공고",
    date: "2024.03.15",
    isImportant: true,
    isNew: true,
  },
  {
    id: 2,
    title: "2024년도 보수교육 일정 안내",
    date: "2024.03.10",
    isImportant: true,
    isNew: true,
  },
  {
    id: 3,
    title: "자격증 발급 신청 안내",
    date: "2024.03.05",
    isImportant: false,
    isNew: false,
  },
  {
    id: 4,
    title: "2024년 제1회 시험 합격자 발표",
    date: "2024.02.28",
    isImportant: false,
    isNew: false,
  },
  {
    id: 5,
    title: "시험장 위치 및 유의사항 안내",
    date: "2024.02.20",
    isImportant: false,
    isNew: false,
  },
]

export function NoticeBoard() {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">공지사항</h2>
          <Link 
            href="/notices" 
            className="flex items-center gap-1 text-primary hover:text-primary/80 font-medium text-sm"
          >
            더보기
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <ul className="divide-y divide-border">
            {notices.map((notice) => (
              <li key={notice.id}>
                <Link 
                  href={`/notices/${notice.id}`}
                  className="flex items-center justify-between px-6 py-4 hover:bg-muted transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    {notice.isImportant && (
                      <Pin className="h-4 w-4 text-destructive flex-shrink-0" />
                    )}
                    <span className="text-foreground truncate">{notice.title}</span>
                    {notice.isNew && (
                      <Badge variant="destructive" className="flex-shrink-0 text-xs">NEW</Badge>
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground ml-4 flex-shrink-0">
                    {notice.date}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
