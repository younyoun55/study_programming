import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '03f3aba47cd2458d9285c089e37e6aff'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '0d55f0299f86445f9c1e9e8731e5a848'
                    }
                    'set-todo-defaults': {
                        table: 'sys_script'
                        id: 'c8f5f09059ad4504afe8c1c8bb93c9a3'
                    }
                    'src_server_business-rules_set-todo-defaults_ts': {
                        table: 'sys_module'
                        id: '6829f1c47ba6439ab9c79040b8e9f3cd'
                    }
                }
                composite: [
                    {
                        table: 'ua_table_licensing_config'
                        id: '07a31051c1aa48988831f05251e62663'
                        key: {
                            name: 'x_366195_hello_todo'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '07b27da26a0447a49a602c3d498d2896'
                        key: {
                            name: 'x_366195_hello_todo'
                            element: 'task'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '326d5e96195f4f4f9fb6d781af2410ff'
                        key: {
                            name: 'x_366195_hello_todo'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4b17b53b9b3d4790b5c7c0146b4f6ba7'
                        key: {
                            name: 'x_366195_hello_todo'
                            element: 'task'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4e2a5a926b7c45aaa520b5ad2c891c67'
                        key: {
                            name: 'x_366195_hello_todo'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5797e12239b14244801ce15716f04143'
                        key: {
                            name: 'x_366195_hello_todo'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8223aeb6c6fa406198142ef7f0b0334d'
                        key: {
                            name: 'x_366195_hello_todo'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '96d9967d8c58436e848053058a8ffbd3'
                        key: {
                            name: 'x_366195_hello_todo'
                            element: 'priority'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'a941ad8564bd498e96e796199cf0d3de'
                        key: {
                            name: 'x_366195_hello_todo'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ef361473fc624f8cbf3e76a736c308f2'
                        key: {
                            name: 'x_366195_hello_todo'
                            element: 'NULL'
                        }
                    },
                ]
            }
        }
    }
}
