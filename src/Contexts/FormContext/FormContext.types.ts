import { FormValues } from "@/Types"
import { UseFormReturn } from "react-hook-form"

export interface FormContextType extends UseFormReturn<FormValues> {
    handleDelete: () => Promise<void>
    handleEdit: () => Promise<void>
    handleMarkAsPaid: () => Promise<void>
    hasFieldError: (field: 'name' | 'quantity' | 'price' | 'total') => boolean
    calculateTotals: () => void
    invoiceId: string | string[]
}