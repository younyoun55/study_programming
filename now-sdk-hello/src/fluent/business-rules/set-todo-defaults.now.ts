import { BusinessRule } from '@servicenow/sdk/core'
import { setTodoDefaults } from '../../server/business-rules/set-todo-defaults'

BusinessRule({
    $id: Now.ID['set-todo-defaults'],
    name: 'Set Todo Defaults',
    table: 'x_366195_hello_todo',
    when: 'before',
    action: ['insert'],
    order: 100,
    script: setTodoDefaults,
})
