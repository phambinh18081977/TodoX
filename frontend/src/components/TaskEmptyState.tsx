import type { FilterTypes } from '@/lib/data';
import React from 'react'


// type FilterType = 'all' | 'active' | 'completed';

interface TaskEmptyStateProps {
  filter: FilterTypes;
}

const TaskEmptyState: React.FC<TaskEmptyStateProps> = ({filter}) => {
  
  return (
    <div>
      {filter === 'all' && <p>Không có nhiệm vụ nào cả</p>}
      {filter === 'active' && <p>Không có nhiệm vụ đang hoạt động</p>}
      {filter === 'completed' && <p>Không có nhiệm vụ hoàn thành</p>}
    </div>
  )
}

export default TaskEmptyState