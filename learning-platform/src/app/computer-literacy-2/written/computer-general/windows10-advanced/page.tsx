import ProtectedCoursePage from "@/components/ProtectedCoursePage";

export default function ChapterPage() {
  return (
    <ProtectedCoursePage
      permission="computer2"
      eyebrow="COMPUTER LITERACY 2 · COMPUTER GENERAL"
      title="2장 한글 Windows 10의 고급 기능"
      description=""
      hideIntro
      items={[]}
    />
  );
}
