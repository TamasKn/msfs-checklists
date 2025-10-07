import ChecklistItems from "./components/main/checklist-items";

export default function Home() {
  return (
    <div className="text-center p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
      MSFS Checklists
      </h1>

      <ChecklistItems />
    </div>
  );
}
