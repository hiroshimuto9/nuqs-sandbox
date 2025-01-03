"use client";
import { useQueryState } from "nuqs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCallback } from "react";

export function TabsContents() {
  const [gender, setGender] = useQueryState("gender", { defaultValue: "" });
  const [type, setType] = useQueryState("type", { defaultValue: "" });

  const handleGenderChange = useCallback(
    (value: string) => {
      setGender(value);
    },
    [setGender]
  );

  const handleTypeChange = useCallback(
    (value: string) => {
      setType(value);
    },
    [setType]
  );

  return (
    <div className="flex justify-center">
      <Tabs
        value={gender}
        onValueChange={handleGenderChange}
        className="w-[400px]"
      >
        <TabsList>
          <TabsTrigger value="male">男性</TabsTrigger>
          <TabsTrigger value="female">女性</TabsTrigger>
        </TabsList>
        <TabsContent value="male">男性一覧</TabsContent>
        <TabsContent value="female">女性一覧</TabsContent>
      </Tabs>

      <Tabs value={type} onValueChange={handleTypeChange} className="w-[400px]">
        <TabsList>
          <TabsTrigger value="adult">大人</TabsTrigger>
          <TabsTrigger value="child">子供</TabsTrigger>
        </TabsList>
        <TabsContent value="adult">大人一覧</TabsContent>
        <TabsContent value="child">子供一覧</TabsContent>
      </Tabs>
    </div>
  );
}
