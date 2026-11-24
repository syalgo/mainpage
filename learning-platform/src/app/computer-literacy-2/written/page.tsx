import ProtectedCoursePage from "@/components/ProtectedCoursePage";

export default function ComputerLiteracy2WrittenPage() {
  return (
    <ProtectedCoursePage
      permission="computer2"
      eyebrow="COMPUTER LITERACY 2 · WRITTEN"
      title="필기"
      description=""
      hideIntro
      items={[
        { title: "1과목 컴퓨터 일반", description: "", href: "/computer-literacy-2/written/computer-general" },
        { title: "2과목 스프레드시트 일반", description: "", href: "/computer-literacy-2/written/spreadsheet-general" },
      ]}
    />
  );
}
