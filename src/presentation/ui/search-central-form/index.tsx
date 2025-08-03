import { Button } from "@components/core/button";
import { Card } from "@components/core/card";
import { Input } from "@components/core/input";
import { Select } from "@components/core/select/Select";
import * as styles from "./styles/search-central-form.css";
import * as constants from "./constants";
import { useForm } from "react-hook-form";
import { searchCentralSchema, searchCentralType } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SelectOption } from "@components/core/select/types";
import { useRouter, useSearchParams } from "next/navigation";

export const SearchCentralForm = () => {
  const { register, handleSubmit, setValue } = useForm<searchCentralType>({
    resolver: zodResolver(searchCentralSchema),
  });
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectSearchType = (selected: SelectOption) => {
    const selectType = selected.value === "name" ? "name" : "model";
    setValue("searchType", selectType);
  };

  const searchCentral = (form: searchCentralType) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!form.search) {
      params.delete("search");
      params.delete("searchType");
    }

    if (form.search) {
      params.set("search", form.search);
      params.set("searchType", form.searchType);
    }
    
    router.replace(`?${params.toString()}`);
  };

  return (
    <Card.Root>
      <form onSubmit={handleSubmit(searchCentral)}>
        <Card.Content className={styles.searchContainerStyle}>
          <Input {...register("search")} placeholder="Buscar..." fullWidth />
          <Button type="submit" variants="default">
            Buscar
          </Button>
          <Select
            options={constants.options}
            onChange={(value) => selectSearchType(value as SelectOption)}
          />
          {searchParams.toString().length > 0 && (
            <Button
              onClick={() => router.push("/centrais")}
              type="button"
              variants="default"
              style={{ width: "18rem" }}
            >
              Limpar filtros
            </Button>
          )}
        </Card.Content>
      </form>
    </Card.Root>
  );
};
