export interface BoardColumn {
    key: string;
    label: string;
    width?: string;
    align?: 'left' | 'center' | 'right';
}

export interface BoardItem {
    [key: string]: any;
}

export interface BoardProps {
    columns: BoardColumn[];
    data: BoardItem[];
    onRowClick?: (row: BoardItem) => void;
}