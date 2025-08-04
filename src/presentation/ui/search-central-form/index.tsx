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
import { MultiSelect } from "@components/core/multi-select";
import { useModelsQuery } from "../../hooks/models/use-models-query";
import { multiSelectOptions } from "@components/core/multi-select/types";

export const SearchCentralForm = () => {
  const { register, handleSubmit } = useForm<searchCentralType>({
    resolver: zodResolver(searchCentralSchema),
  });
  const { modelsSelectOptions } = useModelsQuery();
  const router = useRouter();
  const searchParams = useSearchParams();

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
          <Input {...register("search")} placeholder="Buscar..." fullWidth />
          <Button type="submit" variants="default">
            Buscar
          </Button>
          <MultiSelect
            options={modelsSelectOptions}
            onChooseFilters={onMultiSelectModels}
            placeholder="Modelos"
            defaultValues={searchParams.getAll("models")}
          />
          {searchParams.toString().length > 0 && (
            <Button
              onClick={() => router.push("/centrais")}
              type="button"
              variants="default"
              style={{ width: "20rem" }}
            >
              Limpar filtros
            </Button>
          )}
        </Card.Content>
      </form>
    </Card.Root>
  );
};
