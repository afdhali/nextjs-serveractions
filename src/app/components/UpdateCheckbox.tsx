"use client";

import { updateTodo } from "@/lib/actions";
import { useTransition } from "react";

export default function UpdateCheckbox({ todo }: { todo: Todo }) {
  const [isPending, startTransition] = useTransition();

  return (
    <input
      type="checkbox"
      // checked={optimisticTodo.completed}
      checked={todo.completed}
      id="completed"
      name="completed"
      onChange={() => startTransition(() => updateTodo(todo))}
      // onChange={async () => {
      //     addOptimisticTodo(!todo.completed)
      //     await updateTodo(todo)
      //     router.refresh() // updates client-side cache
      // }}
      disabled={isPending}
      className="min-w-[2rem] min-h-[2rem]"
    />
  );
}
