import { Icon } from "@iconify/react";

const links = [
  {
    label: "Dashboard",
    icon: <Icon icon="clarity:dashboard-line" />,
  },
  {
    label: "Activity",
    icon: <Icon icon="lucide:activity-square" />,
  },
  {
    label: "Categories",
    icon: <Icon icon="carbon:categories" />,
  },
  {
    label: "Budget and Saving",
    icon: <Icon icon="ic:outline-savings" />,
  },
];

export const Sidebar = () => {
  return (
    <aside className="h-screen w-80 shadow-2xl">
      <div className="flex justify-center items-center py-5 gap-2">
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
      <div className="flex flex-col items-center py-5">
        <div className="w-24 h-24 rounded-full outline-double outline-brand-turquoise"></div>
        <div className="pt-4 text-center">
          <h3 className="text-2xl text-brand-orange">Hello Prince</h3>
          <h4 className="text-white">Manage Account</h4>
        </div>
      </div>
      <div>
        {links.map((link, idx) => (
          <div
            key={idx}
            className="flex items-center gap-5 text-white hover:bg-brand-turquoise py-2 cursor-pointer duration-300"
          >
            <span className="text-4xl">{link.icon}</span>
            <span className="text-xl">{link.label}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};
