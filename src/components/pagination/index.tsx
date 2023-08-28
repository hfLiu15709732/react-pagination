import { paginationInt } from "../../types/pagination";
import PaginationCore from "../paginationCore";
import "./index.scss";

export default function Pagination({
	listTotal,
	currentSize,
	pageChange,
	pageSize,
	showTotal = true,
	preTitle,
	lastTitle,
	showRow = true,
	sizeChange,
}: paginationInt) {
	const changePage = (page: string | number) => {
		if (page != "...") {
			pageChange(page);
		}
	};

	return (
		<div className="paginationBox">
			<PaginationCore
				total={listTotal}
				pageSize={pageSize}
				currentPage={currentSize}
				pageChange={changePage}
				sizeChange={sizeChange}
				showTotal={showTotal}
				preTitle={preTitle}
				lastTitle={lastTitle}
				showRow={showRow}
			></PaginationCore>
		</div>
	);
}
