import { Skeleton } from "@/components/ui/skeleton";
import {
	TableBody,
	TableCell,
	TableRow,
  Table,
} from "./ui/table";

export function Loader() {
	return (
		<Table className="w-full">
			<TableBody>
				<TableRow>
					<TableCell className="font-medium">
						<Skeleton className="h-4 w-full" />
					</TableCell>
					<TableCell>
						<Skeleton className="h-4 w-full" />
					</TableCell>
					<TableCell>
						<Skeleton className="h-4 w-full" />
					</TableCell>
					<TableCell className="text-right">
						<Skeleton className="h-4 w-full" />
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">
						<Skeleton className="h-4 w-full" />
					</TableCell>
					<TableCell>
						<Skeleton className="h-4 w-full" />
					</TableCell>
					<TableCell>
						<Skeleton className="h-4 w-full" />
					</TableCell>
					<TableCell className="text-right">
						<Skeleton className="h-4 w-full" />
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">
						<Skeleton className="h-4 w-full" />
					</TableCell>
					<TableCell>
						<Skeleton className="h-4 w-full" />
					</TableCell>
					<TableCell>
						<Skeleton className="h-4 w-full" />
					</TableCell>
					<TableCell className="text-right">
						<Skeleton className="h-4 w-full" />
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
}
