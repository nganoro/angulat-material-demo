export interface ParentTast {
    name: string;
    completed: boolean;
    subtasks?: ParentTast[];
}