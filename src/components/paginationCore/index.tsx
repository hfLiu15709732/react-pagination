import { useState } from "react";
import { paginationCoreInt } from "../../types/pagination";
import "./index.scss";

export default function PaginationCore({
	total,
	pageSize,
	currentPage,
	showTotal,
	preTitle,
	lastTitle,
	pageChange,
	sizeChange,
	showRow,
}: paginationCoreInt) {
	const [groupStart, setGroupStart] = useState(1);
	const [middleMax, setMiddleMax] = useState(4);
	const [tmpPage, setTmpPage] = useState(0);

	const pageList: Array<any> = [];

	const getPageList = () => {
		const pageNum = Math.ceil(total / pageSize);

		if (pageNum < 6) {
			for (let i = 1; i <= Math.ceil(total / pageSize); i++) {
				pageList.push(i);
			}
		} // 当页码在10页以内，就全部展示
		else {
			let pageLength = 0;

			pageList.push(1);

			if (middleMax + groupStart > pageNum) {
				pageLength = pageNum;
			} else {
				pageLength = middleMax + groupStart;
			}
			// 前面省略号(当当前页码比分组的页码大时显示省略号)
			if (currentPage >= middleMax) {
				pageList.push("...");
			}
			// 非第一页和最后一页显示
			for (let i = groupStart; i < pageLength; i++) {
				if (i <= pageNum - 1 && i > 1) {
					pageList.push(i);
				}
			}
			// 后面省略号
			if (pageNum - groupStart >= middleMax + 1) {
				pageList.push("...");
			}

			pageList.push(pageNum);
		}
	};

	getPageList();

	const nextBtn = () => {
		if (currentPage < Math.ceil(total / pageSize)) {
			selectPage(currentPage + 1);
		} else {
			alert("请注意 已经是最后一页啦");
		}
	};

	const perBtn = () => {
		if (currentPage > 1) {
			selectPage(currentPage - 1);
		} else {
			alert("请注意 已经是第一页啦");
		}
	};
	const turnPage = (value: number) => {
		if (value === 13) {
			if (tmpPage < 1 || tmpPage > Math.ceil(total / pageSize)) {
				alert("请输入合理的页码数据！");
			} else {
				selectPage(tmpPage);
			}
		}
	};

	const selectPage = (page: number) => {
		if (page >= middleMax) {
			setGroupStart(page - 2);
		}
		if (page < middleMax) {
			setGroupStart(1);
		}
		if (page === 1) {
			setGroupStart(1);
		}

		pageChange(page);
	};

	return (
		<>
			<div className="paginationCoreBox">
				<button className="commonButton totalButton" hidden={!showTotal}>
					{preTitle}: {total}
					{lastTitle}
				</button>
				<button onClick={perBtn} className="commonButton operateButton">
					上一页
				</button>
				<div hidden={!showRow} className="rowList">
					{pageList.map((item, index) => (
						<div
							className={
								currentPage == item ? "commonButton active" : "commonButton"
							}
							key={index}
							onClick={() => selectPage(item)}
						>
							{item}
						</div>
					))}
				</div>
				<button onClick={nextBtn} className="commonButton operateButton">
					下一页
				</button>
				<div className="selectBox">
					<select
						className="shortselect"
						value={pageSize}
						onChange={(value) => {
							sizeChange(parseInt(value.target.value));
						}}
					>
						<option value="5">5条/页</option>
						<option value="10">10条/页</option>
						<option value="20">20条/页</option>
					</select>
				</div>
				<input
					placeholder="页码跳转"
					onChange={(value) => {
						setTmpPage(parseInt(value.target.value));
					}}
					onKeyDown={(value) => {
						turnPage(value.keyCode);
					}}
				/>
			</div>
		</>
	);
}
