import ProtectedCoursePage from "@/components/ProtectedCoursePage";

export default function ChapterPage() {
  return (
    <ProtectedCoursePage
      permission="computer2"
      eyebrow="COMPUTER LITERACY 2 · COMPUTER GENERAL"
      title="8장 컴퓨터 시스템 보호"
      description=""
      hideIntro
      items={[]}
    />
  );
}
