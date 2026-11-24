import ProtectedCoursePage from "@/components/ProtectedCoursePage";

export default function ChapterPage() {
  return (
    <ProtectedCoursePage
      permission="computer2"
      eyebrow="COMPUTER LITERACY 2 · COMPUTER GENERAL"
      title="1장 한글 Windows 10의 기본"
      description=""
      hideIntro
      items={[]}
    />
  );
}
