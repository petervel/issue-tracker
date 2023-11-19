import { IssueStatusBadge, Link } from "@/app/components";
import prisma from "@/prisma/client";
import { Table } from "@radix-ui/themes";
import IssueActions from "./IssueActions";
import css from "./IssuesPage.module.css";

const IssuesPage = async () => {
	const issues = await prisma.issue.findMany();
	return (
		<div>
			<IssueActions />
			<Table.Root variant="surface">
				<Table.Header>
					<Table.Row>
						<Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
						<Table.ColumnHeaderCell className={css.noMobile}>
							Status
						</Table.ColumnHeaderCell>
						<Table.ColumnHeaderCell className={css.noMobile}>
							Created
						</Table.ColumnHeaderCell>
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
