import { Icon } from "@iconify/react";

export const Sidebar = () => {
  return (
    <aside className="h-screen w-80 shadow-2xl">
      <div className="flex justify-center items-center py-4 gap-2">
        <Icon
          icon="arcticons:expense-register"
          fontSize={30}
          className="text-white"
        />
        <h3 className="text-2xl font-bold tracking-wide">
          <span className="text-brand-turquoise">Expense</span>
          <span className="text-brand-orange">Tracker</span>
        </h3>
      </div>
    </aside>
  );
};
