import Link from "next/link"
import { FileText, Search, GraduationCap, Bell } from "lucide-react"

const quickMenuItems = [
  {
    icon: FileText,
    title: "원서접수",
    description: "자격시험 원서접수",
    href: "/applications/new",
    color: "bg-primary",
  },
  {
    icon: Search,
    title: "합격자 조회",
    description: "시험 결과 확인",
    href: "/results",
    color: "bg-secondary",
  },
  {
    icon: GraduationCap,
    title: "보수교육",
    description: "자격 갱신 교육",
    href: "/education",
    color: "bg-accent",
  },
  {
    icon: Bell,
    title: "공지사항",
    description: "협회 소식 안내",
    href: "/notices",
    color: "bg-primary",
  },
]

export function QuickMenu() {
  return (
    <section className="py-8 bg-card">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickMenuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col items-center p-6 bg-muted hover:bg-primary hover:shadow-lg rounded-xl transition-all duration-300"
            >
              <div className={`${item.color} p-4 rounded-full mb-4 group-hover:bg-primary-foreground transition-colors`}>
                <item.icon className="h-8 w-8 text-primary-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-bold text-foreground group-hover:text-primary-foreground text-lg mb-1 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 transition-colors">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
