import { Table } from "@radix-ui/themes";
import css from "./IssuesPage.module.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import IssueActions from "./IssueActions";
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
