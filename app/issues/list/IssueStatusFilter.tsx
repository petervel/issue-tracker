"use client";

import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";

const ALL_VALUE = "<all>";
const IssueStatusFilter = () => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const statuses: { label: string; value?: Status }[] = [
		{ label: "All" },
		{ label: "Open", value: "OPEN" },
		{ label: "In Progress", value: "IN_PROGRESS" },
		{ label: "Closed", value: "CLOSED" },
	];
	return (
		<Select.Root
			onValueChange={(status) => {
				const params = new URLSearchParams();
				if (status !== ALL_VALUE) {
					params.append("status", status);
				}
				if (searchParams.get("orderBy")) {
					params.append("orderBy", searchParams.get("orderBy")!);
				}
				const query = params.size ? `?${params.toString()}` : "";
				router.push(`/issues/list${query}`);
			}}
			defaultValue={searchParams.get("status") ?? ALL_VALUE}
		>
			<Select.Trigger placeholder="Filter by status..." />
			<Select.Content>
				{statuses.map((status) => (
					<Select.Item
						key={status.value || ALL_VALUE}
						value={status.value || ALL_VALUE}
					>
						{status.label}
					</Select.Item>
				))}
			</Select.Content>
		</Select.Root>
	);
};

export default IssueStatusFilter;
