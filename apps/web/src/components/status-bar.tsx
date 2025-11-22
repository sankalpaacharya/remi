import { SunMedium, Clock, Calendar, Twitter, Github } from "lucide-react";

export function StatusBar() {
  const workspaces = [
    { id: 1, name: "Editor" },
    { id: 2, name: "Templates" },
    { id: 3, name: "Settings" },
    { id: 4, name: "About" },
  ];
  const activeWorkspace = 1;

  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = now.toLocaleDateString([], {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  const statusItems = [
    { label: "BRI", value: "30%", icon: SunMedium, link: null },
    {
      label: "Twitter",
      value: "@sankalpa_02",
      icon: Twitter,
      link: "https://twitter.com/sankalpa_02",
    },
    {
      label: "GitHub",
      value: "@sankalpaacharya",
      icon: Github,
      link: "https://github.com/sankalpaacharya/remi",
    },
  ];

  return (
    <div className="flex w-full justify-between items-center px-3 py-1 bg-background border-b border-border text-foreground text-sm font-mono">
      {/* Workspaces */}
      <div className="flex items-center gap-1">
        {workspaces.map((workspace) => (
          <div
            key={workspace.id}
            className={`px-3 py-0.5 text-center cursor-pointer transition-colors ${
              workspace.id === activeWorkspace
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            {workspace.name}
          </div>
        ))}
      </div>

      {/* Status Items */}
      <div className="flex items-center gap-4">
        {statusItems.map(({ label, value, icon: Icon, link }, idx) => {
          const content = (
            <>
              <Icon className="size-3.5" />
              <span className="text-xs">{value}</span>
            </>
          );

          return link ? (
            <a
              key={idx}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              {content}
            </a>
          ) : (
            <div
              key={idx}
              className="flex items-center gap-1.5 text-muted-foreground"
            >
              {content}
            </div>
          );
        })}
        <div className="flex items-center gap-1.5 ml-2 px-2 py-0.5 bg-muted/50">
          <Calendar className="size-3.5" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 bg-primary/20 text-foreground">
          <Clock className="size-3.5" />
          <span className="font-semibold">{time}</span>
        </div>
      </div>
    </div>
  );
}
