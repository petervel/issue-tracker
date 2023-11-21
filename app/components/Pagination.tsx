import {
	ChevronLeftIcon,
	ChevronRightIcon,
	DoubleArrowLeftIcon,
	DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Button, Flex, Text } from "@radix-ui/themes";
import { ReactNode } from "react";

type PaginationProps = {
	itemCount: number;
	pageSize: number;
	currentPage: number;
};

const Pagination = ({ itemCount, pageSize, currentPage }: PaginationProps) => {
	const pageCount = Math.ceil(itemCount / pageSize);
	if (pageCount <= 1) return null;

	return (
		<Flex align="center" gap="2">
			<Text>
				Page {currentPage} of {pageCount}
			</Text>
			<PaginationButton disabled={currentPage === 1}>
				<DoubleArrowLeftIcon />
			</PaginationButton>
			<PaginationButton disabled={currentPage === 1}>
				<ChevronLeftIcon />
			</PaginationButton>
			<PaginationButton disabled={currentPage === pageCount}>
				<ChevronRightIcon />
			</PaginationButton>
			<PaginationButton disabled={currentPage === pageCount}>
				<DoubleArrowRightIcon />
			</PaginationButton>
		</Flex>
	);
};

type PaginationButtonProps = {
	disabled: boolean;
	children: ReactNode;
};

const PaginationButton = ({ disabled, children }: PaginationButtonProps) => (
	<Button color="gray" variant="soft" disabled={disabled}>
		{children}
	</Button>
);

export default Pagination;
