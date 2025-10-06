type Status = "all" | "active" | "completed";
export const FilterType:Record<Status,string> = {
    all: "Tất cả",
    active: "Đang làm",
    completed: "hoàn thành"
};
export type FilterTypes = 'all' | 'active' | 'completed';