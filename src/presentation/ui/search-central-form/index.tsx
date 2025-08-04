import { Button } from "@components/core/button";
import { Card } from "@components/core/card";
import { Input } from "@components/core/input";
import { MultiSelect } from "@components/core/multi-select";
import { multiSelectOptions } from "@components/core/multi-select/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { useModelsQuery } from "../../hooks/models/use-models-query";
import { searchCentralSchema, searchCentralType } from "./schema";
import * as styles from "./styles/search-central-form.css";

export const SearchCentralForm = () => {
  const { register, handleSubmit } = useForm<searchCentralType>({
    resolver: zodResolver(searchCentralSchema),
  });
  const { modelsSelectOptions } = useModelsQuery();
  const router = useRouter();
  const searchParams = useSearchParams();
  const excludedKeys = ["page", "items_per_page"];
  const hasOtherFilters = [...searchParams.keys()].some(
    (key) => !excludedKeys.includes(key)
  );

  const searchCentral = (form: searchCentralType) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!form.search) {
      params.delete("search");
    }

    if (form.search) {
      params.set("search", form.search);
    }

    router.replace(`?${params}`);
  };

  const onMultiSelectModels = (items: multiSelectOptions[]) => {
    const params = new URLSearchParams(searchParams.toString());

    const selectedModels = items.map((item) => {
      return item.value;
    });

    params.delete("models");
    if (selectedModels.length > 0) {
      selectedModels.map((item) => params.append("models", item));
    }
    router.replace(`?${params}`);
  };

  return (
    <Card.Root>
      <form onSubmit={handleSubmit(searchCentral)}>
        <Card.Content className={styles.searchContainerStyle}>
          <Input
            autoComplete="off"
            {...register("search")}
            placeholder="Buscar central pelo nome"
            fullWidth
          />
          <Button type="submit">Buscar</Button>
          <MultiSelect
            options={modelsSelectOptions}
            onChooseFilters={onMultiSelectModels}
            placeholder="Modelos"
            defaultValues={searchParams.getAll("models")}
            className={styles.multiSelectStyle}
          />
          {hasOtherFilters && (
            <Button
              onClick={() => router.replace("/centrais")}
              type="button"
              className={styles.clearFiltersButtonStyle}
            >
              Limpar filtros
            </Button>
          )}
        </Card.Content>
      </form>
    </Card.Root>
  );
};
