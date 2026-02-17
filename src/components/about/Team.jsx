import TeamCard from "../ui/TeamCard";

const team = [
  {
    name: "Alex Rivera",
    role: "Founder & CEO",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2340&auto=format&fit=crop",
  },
  {
    name: "Sarah Chen",
    role: "Head of Product",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2340&auto=format&fit=crop",
  },
  {
    name: "Marcus Thorne",
    role: "Lead Engineer",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2340&auto=format&fit=crop",
  },
  {
    name: "Elena Vance",
    role: "Design Director",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2340&auto=format&fit=crop",
  },
];

const Team = () => {
  return (
    <section className="py-24 bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display">
            Meet the Team
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-400">
            The passionate individuals building the future of work.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <TeamCard
              key={member.name}
              name={member.name}
              role={member.role}
              avatar={member.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
