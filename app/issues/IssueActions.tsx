import { Button } from "@radix-ui/themes";
import Link from "next/link";
import css from "./IssuesPage.module.css";

const IssueActions = () => {
	return (
		<div className={css.newIssueButton}>
			<Button>
				<Link href="/issues/new">New issue</Link>
			</Button>
		</div>
	);
};

export default IssueActions;
