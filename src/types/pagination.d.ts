export interface paginationInt {
	listTotal: number;
	currentSize: number;
	pageChange: Function;
	pageSize: number;
	showTotal: boolean;
	preTitle: string;
	lastTitle: string;
	showRow: boolean;
	pageChange: (page: number) => void;
	sizeChange: (size: number) => void;
}

export interface paginationCoreInt {
	total: number;
	pageSize: number;
	currentPage: number;
	showTotal: boolean;
	preTitle: string;
	lastTitle: string;
	showRow: boolean;
	pageChange: (page: number) => void;
	sizeChange: (size: number) => void;
}
