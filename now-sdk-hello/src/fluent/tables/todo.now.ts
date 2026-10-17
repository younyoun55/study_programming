import { Table, StringColumn, BooleanColumn, IntegerColumn } from '@servicenow/sdk/core'

export const x_366195_hello_todo = Table({
    name: 'x_366195_hello_todo',
    label: 'Hello Todo',
    allowWebServiceAccess: true,
    schema: {
        task: StringColumn({ label: 'Task', maxLength: 120, mandatory: true }),
        active: BooleanColumn({ label: 'Active', default: true }),
        priority: IntegerColumn({ label: 'Priority' }),
    },
})
