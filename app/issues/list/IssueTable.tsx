import { IssueStatusBadge, Link } from "@/app/components";
import { Issue, Status } from "@prisma/client";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import { Table } from "@radix-ui/themes";
import NextLink from "next/link";
import css from "./IssuesPage.module.css";

export type IssueQuery = { status: Status; orderBy: keyof Issue; page: string };
type IssueTableProps = {
	searchParams: IssueQuery;
	issues: Issue[];
};

const IssueTable = ({ searchParams, issues }: IssueTableProps) => {
	return (
		<Table.Root variant="surface">
			<Table.Header>
				<Table.Row>
					{columns.map((column) => (
						<Table.ColumnHeaderCell
							key={column.value}
							className={column.className}
						>
							<NextLink
								href={{
									query: { ...searchParams, orderBy: column.value },
								}}
							>
								{column.label}
							</NextLink>
							{column.value === searchParams.orderBy && (
								<ArrowUpIcon className="inline" />
							)}
						</Table.ColumnHeaderCell>
					))}
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{issues.map((issue) => (
					<Table.Row key={issue.id}>
						<Table.Cell>
							<Link href={`/issues/${issue.id}`}>{issue.title}</Link>
							<div className={css.mobileOnly}>
								<IssueStatusBadge status={issue.status} />
							</div>
						</Table.Cell>
						<Table.Cell className={css.noMobile}>
							<IssueStatusBadge status={issue.status} />
						</Table.Cell>
						<Table.Cell className={css.noMobile}>
							{issue.createdAt.toDateString()}
						</Table.Cell>
					</Table.Row>
				))}
			</Table.Body>
		</Table.Root>
	);
};

const columns: {
	label: string;
	className: string;
	value: keyof Issue;
}[] = [
	{ label: "Issue", className: "", value: "title" },
	{ label: "Status", className: css.noMobile, value: "status" },
	{ label: "Created", className: css.noMobile, value: "createdAt" },
];

export const columnNames = columns.map((column) => column.value);

export default IssueTable;
