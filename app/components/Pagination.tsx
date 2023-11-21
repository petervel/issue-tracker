"use client";

import {
	ChevronLeftIcon,
	ChevronRightIcon,
	DoubleArrowLeftIcon,
	DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Button, Flex, Text } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import { ReactNode } from "react";

type PaginationProps = {
	itemCount: number;
	pageSize: number;
	currentPage: number;
};

const Pagination = ({ itemCount, pageSize, currentPage }: PaginationProps) => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const pageCount = Math.ceil(itemCount / pageSize);
	if (pageCount <= 1) return null;

	const changePage = (page: number) => {
		const params = new URLSearchParams(searchParams);
		params.set("page", page.toString());
		router.push(`?${params.toString()}`);
	};

	return (
		<Flex align="center" gap="2">
			<Text size="2">
				Page {currentPage} of {pageCount}
			</Text>
			<PaginationButton
				disabled={currentPage === 1}
				onClick={() => changePage(1)}
			>
				<DoubleArrowLeftIcon />
			</PaginationButton>
			<PaginationButton
				disabled={currentPage === 1}
				onClick={() => changePage(currentPage - 1)}
			>
				<ChevronLeftIcon />
			</PaginationButton>
			<PaginationButton
				disabled={currentPage === pageCount}
				onClick={() => changePage(currentPage + 1)}
			>
				<ChevronRightIcon />
			</PaginationButton>
			<PaginationButton
				disabled={currentPage === pageCount}
				onClick={() => changePage(pageCount)}
			>
				<DoubleArrowRightIcon />
			</PaginationButton>
		</Flex>
	);
};

type PaginationButtonProps = {
	disabled: boolean;
	children: ReactNode;
	onClick: () => void;
};

const PaginationButton = ({
	disabled,
	children,
	onClick,
}: PaginationButtonProps) => (
	<Button color="gray" variant="soft" disabled={disabled} onClick={onClick}>
		{children}
	</Button>
);

export default Pagination;
