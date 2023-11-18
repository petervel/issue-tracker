import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";

type MY_COLOURS = "red" | "violet" | "green";

const statusMap: Record<Status, { label: string; colour: MY_COLOURS }> = {
	OPEN: { label: "Open", colour: "red" },
	IN_PROGRESS: { label: "In progress", colour: "violet" },
	CLOSED: { label: "Closed", colour: "green" },
};

const IssueStatusBadge = ({ status }: { status: Status }) => {
	const item = statusMap[status];
	return <Badge color={item.colour}>{item.label}</Badge>;
};

export default IssueStatusBadge;
