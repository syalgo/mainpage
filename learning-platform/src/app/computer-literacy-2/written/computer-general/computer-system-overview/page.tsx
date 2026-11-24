import ProtectedCoursePage from "@/components/ProtectedCoursePage";

export default function ChapterPage() {
  return (
    <ProtectedCoursePage
      permission="computer2"
      eyebrow="COMPUTER LITERACY 2 · COMPUTER GENERAL"
      title="3장 컴퓨터 시스템의 개요"
      description=""
      hideIntro
      items={[]}
    />
  );
}
