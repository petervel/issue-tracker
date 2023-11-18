import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import prisma from "@/prisma/client";
import css from "./IssuesPage.module.css";
import IssueStatusBadge from "../components/IssueStatusBadge";

const IssuesPage = async () => {
	const issues = await prisma.issue.findMany();
	return (
		<div>
			<div className={css.newIssueButton}>
				<Button>
					<Link href="/issues/new">New issue</Link>
				</Button>
			</div>
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
								{issue.title}
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

export default IssuesPage;
