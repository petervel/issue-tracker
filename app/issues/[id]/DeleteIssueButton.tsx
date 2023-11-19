import { Button } from "@radix-ui/themes";
import Link from "next/link";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
	return <Button color="red">Delete Issue</Button>;
};

export default DeleteIssueButton;
