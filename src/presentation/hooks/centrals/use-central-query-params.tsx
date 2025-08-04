import { ORDER } from "@domain/enums/order-enum";
import { useSearchParams } from "next/navigation";

export function useCentralsQueryParams() {
  const searchParams = useSearchParams();
  return {
    page: Number(searchParams.get("page") || "0"),
    limit: Number(searchParams.get("items_per_page") || "10"),
    search: searchParams.get("search") ?? undefined,
    sortBy: searchParams.get("sortBy") ?? undefined,
    order: (searchParams.get("order") as ORDER) ?? undefined,
    models: searchParams.getAll("models") ?? undefined,
  };
}
