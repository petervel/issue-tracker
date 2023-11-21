import { IssueStatusBadge, Link } from "@/app/components";
import prisma from "@/prisma/client";
import { Table } from "@radix-ui/themes";
import IssueActions from "./IssueActions";
import css from "./IssuesPage.module.css";
import { Issue, Status } from "@prisma/client";
import NextLink from "next/link";
import { ArrowUpIcon } from "@radix-ui/react-icons";

type IssuesPageProps = {
	searchParams: { status: Status; orderBy: keyof Issue };
};

const IssuesPage = async ({ searchParams }: IssuesPageProps) => {
	const statuses = Object.values(Status);
	const status = statuses.includes(searchParams.status)
		? searchParams.status
		: undefined;
	const issues = await prisma.issue.findMany({
		where: { status: status },
	});

	const columns: {
		label: string;
		className: string;
		value: keyof Issue;
	}[] = [
		{ label: "Issue", className: "", value: "title" },
		{ label: "Status", className: css.noMobile, value: "status" },
		{ label: "Created", className: css.noMobile, value: "createdAt" },
	];

	return (
		<div>
			<IssueActions />
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
		</div>
	);
};

export const dynamic = "force-dynamic";

export default IssuesPage;
