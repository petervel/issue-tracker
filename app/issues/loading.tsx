import { Skeleton } from "@/app/components";
import { Table } from "@radix-ui/themes";
import IssueActions from "./IssueActions";
import css from "./IssuesPage.module.css";

const LoadingIssuesPage = () => {
	const issues = [1, 2, 3, 4, 5];
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
						<Table.Row key={issue}>
							<Table.Cell>
								<Skeleton />
								<div className={css.mobileOnly}>
									<Skeleton />
								</div>
							</Table.Cell>
							<Table.Cell className={css.noMobile}>
								<Skeleton />
							</Table.Cell>
							<Table.Cell className={css.noMobile}>
								<Skeleton />
							</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table.Root>
		</div>
	);
};

export default LoadingIssuesPage;
