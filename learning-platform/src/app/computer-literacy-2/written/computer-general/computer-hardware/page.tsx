import ProtectedCoursePage from "@/components/ProtectedCoursePage";

export default function ChapterPage() {
  return (
    <ProtectedCoursePage
      permission="computer2"
      eyebrow="COMPUTER LITERACY 2 · COMPUTER GENERAL"
      title="4장 컴퓨터 하드웨어"
      description=""
      hideIntro
      items={[]}
    />
  );
}
