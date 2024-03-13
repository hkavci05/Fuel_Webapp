import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


export default function QuoteHistoryTable() {
    return (
        <main>
            <Table>
                <TableCaption>Your Fuel Quote History</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Gallons Requested</TableHead>
                        <TableHead>Price Per Gallon</TableHead>
                        <TableHead>Total Due</TableHead> 
                        <TableHead>Delivery Address</TableHead>
                        <TableHead>Delivery Date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {quoteHistory.map((entry) => (
                        <TableRow key={entry.date}> 
                            <TableCell>{entry.date}</TableCell>
                            <TableCell>{entry.gallonsRequested}</TableCell>
                            <TableCell>{entry.pricePerGallon}</TableCell>
                            <TableCell>{entry.totalDue}</TableCell> 
                            <TableCell>{entry.deliveryAddress}</TableCell>
                            <TableCell>{entry.deliveryDate}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </main >
    )
}
