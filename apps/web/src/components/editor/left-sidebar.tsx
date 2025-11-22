"use client";

import { useState } from "react";
import { Link2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useStore } from "@/store/useStore";
import {
  getBadgeItems,
  ADDITIONAL_LINKS,
  TECH_STACK_ITEMS,
} from "./left-sidebar/badge-data";
import { BadgesTab } from "./left-sidebar/badges-tab";
import { OtherTab } from "./left-sidebar/other-tab";
import { TechStackTab } from "./left-sidebar/tech-stack-tab";
import type { TabValue } from "./left-sidebar/types";

export default function LeftSideBar() {
  const { repoUrl } = useStore();
  const [activeTab, setActiveTab] = useState<TabValue>("content");

  const badgeItems = getBadgeItems(repoUrl);
  const totalItems = badgeItems.length + ADDITIONAL_LINKS.length;

  return (
    <div className="h-full w-full flex flex-col font-mono text-sm">
      {/* Sidebar Header */}
      <div className="px-4 py-2 border-b">
        <div className="flex items-center gap-2">
          <Link2 className="size-[18px] text-primary" />
          <span className="text-lg font-semibold">Resources</span>
        </div>
      </div>

      {/* Tabs */}
      <Tabs
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as TabValue)}
        className="flex-1 flex flex-col"
      >
        <TabsList className="w-full rounded-none border-b bg-transparent p-0 h-auto">
          <TabsTrigger
            value="content"
            className="flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
          >
            Content
          </TabsTrigger>
          <TabsTrigger
            value="badges"
            className="flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
          >
            Badges
          </TabsTrigger>
          <TabsTrigger
            value="tech-stack"
            className="flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
          >
            Tech Stack
          </TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="flex-1 flex flex-col m-0">
          <OtherTab />
        </TabsContent>
        <TabsContent value="badges" className="flex-1 flex flex-col m-0">
          <BadgesTab badges={badgeItems} links={ADDITIONAL_LINKS} />
          {/* Footer for Badges tab */}
          <div className="px-4 py-2 border-t">
            <div className="text-xs text-muted-foreground">
              <div className="flex items-center justify-between">
                <span>Copy as Markdown</span>
                <span className="text-primary font-semibold">
                  {totalItems} items
                </span>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="tech-stack" className="flex-1 flex flex-col m-0">
          <TechStackTab items={TECH_STACK_ITEMS} />
          {/* Footer for Tech Stack tab */}
          <div className="px-4 py-2 border-t">
            <div className="text-xs text-muted-foreground">
              <div className="flex items-center justify-between">
                <span>Click to add icons</span>
                <span className="text-primary font-semibold">
                  {TECH_STACK_ITEMS.length} icons
                </span>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
