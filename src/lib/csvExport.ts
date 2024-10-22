import {  Table } from '@tanstack/react-table';
interface ExportOptions {
  fileName?: string
  onNoSelection?: () => void
}

export function exportToCSV<T>(
  table: Table<T>, 
  options: ExportOptions = {}
) {
  const { fileName = 'export.csv', onNoSelection } = options;
  const selectedRows = table.getSelectedRowModel().rows;

  if (selectedRows.length === 0) {
    if (onNoSelection) {
      onNoSelection();
    }
    return;
  }

  const visibleColumns = table.getVisibleFlatColumns();
  
  const headers = visibleColumns.map((column) => column.id).join(',');
  const rows = selectedRows.map((row) =>
    visibleColumns.map((column) => {
      const cellValue = row.getValue(column.id);
      return typeof cellValue === 'string' && cellValue.includes(',') 
        ? `"${cellValue}"`
        : cellValue;
    }).join(',')
  );
  
  const csv = [headers, ...rows].join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', fileName);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}