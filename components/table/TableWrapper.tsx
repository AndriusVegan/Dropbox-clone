"use client";

import { FileType } from "@/typings";
import { Button } from "../ui/button";
import { DataTable } from "./Table";
import { useUser } from "@clerk/nextjs";
import { columns } from "./columns";
import { useState } from "react";

function TableWrapper({ skeletonFiles }: { skeletonsFiles: FileType[] }) {
  const { user } = useUser();
  const [initialFiles, setInitialFiles] = useState<FileType[]>([]);
  const [sort, setSort] = useState<"asc" | "desc">("desc");

  return (
    <div>
      <Button onClick={() => setSort(sort === "desc" ? "asc" : "desc")}>
        Sort by {sort === "desc" ? "Newest" : "Oldest"}
      </Button>
      <DataTable columns={columns} data={skeletonFiles} />
    </div>
  );
}

export default TableWrapper;
