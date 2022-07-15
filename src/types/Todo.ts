export type Todo = { 
    title: string, 
    content: string, 
    createdDate: number | string, 
    status: 'completed' | 'doing' | 'not_started'
    tags: string[],

}
 
export type TagType = "AnyThing"