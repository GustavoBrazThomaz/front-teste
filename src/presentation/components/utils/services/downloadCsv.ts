export function downloadCsv<T extends object>(data: T[], filename: string) {
  if (!data || data.length === 0) {
    console.warn("Nenhum dado para exportar");
    return;
  }

  const keys = Object.keys(data[0]) as (keyof T)[];
  const csvRows = [
    keys.join(","),
    ...data.map((row) =>
      keys
        .map((key) => {
        const cell = row[key];
          const escaped =
            typeof cell === "string" ? `"${cell.replace(/"/g, '""')}"` : cell;
          return escaped;
        })
        .join(",")
    ),
  ];

  const csvString = csvRows.join("\n");
  const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", filename);
  link.click();

  URL.revokeObjectURL(url);
}
