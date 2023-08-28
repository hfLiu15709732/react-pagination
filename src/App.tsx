import { useState } from "react";
import Pagination from "./components/pagination";

function App() {
	const [listTotal, setListTotal] = useState(12365);
	const [currentSize, setCurrentSize] = useState(1);
	const [pageSize, setPageSize] = useState(5);
	const pageChange = (value: number) => {
		setCurrentSize(value);
	};
	const sizeChange = (value: number) => {
		setPageSize(value);
	};
	return (
		<>
			<Pagination
				listTotal={listTotal}
				currentSize={currentSize}
				pageChange={pageChange}
				pageSize={pageSize}
				showTotal={true}
				showRow={true}
				sizeChange={sizeChange}
				preTitle={"关注作者数"}
				lastTitle={"人"}
			/>
		</>
	);
}

export default App;
