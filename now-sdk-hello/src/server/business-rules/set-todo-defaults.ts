import { GlideRecord } from '@servicenow/glide'

export function setTodoDefaults(current: GlideRecord<'x_366195_hello_todo'>, previous: GlideRecord<'x_366195_hello_todo'>) {
    if (!current.getValue('priority')) {
        current.setValue('priority', 3)
    }
}
