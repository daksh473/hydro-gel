import { useState } from 'react';
import { type Sample, type Status, type Assignee, STATUSES } from '../data';
import { Filter, ArrowUpDown } from 'lucide-react';

interface DataTableProps {
  samples: Sample[];
  onRowClick: (id: string) => void;
  onUpdateSample: (id: string, updates: Partial<Sample>) => void;
}

const TEAM: Assignee[] = ['Shubhashish', 'Daksh', 'Swayam Shree', 'Suman', 'Nuzail', 'Unassigned'];

export function DataTable({ samples, onRowClick, onUpdateSample }: DataTableProps) {
  const [filterAssignee, setFilterAssignee] = useState<Assignee | 'All'>('All');
  const [filterStatus, setFilterStatus] = useState<Status | 'All'>('All');
  const [sortBy, setSortBy] = useState<'slNo' | 'conductivity' | 'status'>('slNo');
  
  let filtered = samples.filter(s => {
    if (filterAssignee !== 'All' && s.assignedTo !== filterAssignee) return false;
    if (filterStatus !== 'All' && s.status !== filterStatus) return false;
    return true;
  });

  filtered.sort((a, b) => {
    if (sortBy === 'slNo') return a.slNo - b.slNo;
    if (sortBy === 'status') return STATUSES.indexOf(a.status) - STATUSES.indexOf(b.status);
    if (sortBy === 'conductivity') {
      const cA = parseFloat(a.conductivity) || 0;
      const cB = parseFloat(b.conductivity) || 0;
      return cB - cA; // descending
    }
    return 0;
  });

  const getStatusClass = (status: Status) => {
    return `status-pill status-step-${STATUSES.indexOf(status)}`;
  };

  return (
    <div className="data-table-container animate-fade-up">
      <div className="table-controls">
        <div className="filter-group">
          <Filter size={16} />
          <select 
            value={filterAssignee} 
            onChange={(e) => setFilterAssignee(e.target.value as Assignee | 'All')}
            className="control-select"
          >
            <option value="All">All Assignees</option>
            {TEAM.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          <select 
            value={filterStatus} 
            onChange={(e) => setFilterStatus(e.target.value as Status | 'All')}
            className="control-select"
          >
            <option value="All">All Statuses</option>
            {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div className="sort-group">
          <button 
            className="btn btn-secondary" 
            onClick={() => setSortBy(sortBy === 'slNo' ? 'status' : sortBy === 'status' ? 'conductivity' : 'slNo')} 
            title={`Sort by ${sortBy === 'slNo' ? 'Status' : sortBy === 'status' ? 'Conductivity' : 'Sl No'}`}
          >
            <ArrowUpDown size={16} /> Sort: {sortBy === 'slNo' ? 'Sl No' : sortBy === 'status' ? 'Status' : 'Conductivity'}
          </button>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>Sl No</th>
              <th>PVA%</th>
              <th>SA%</th>
              <th>rGO conc</th>
              <th>Solvent</th>
              <th>Assigned To</th>
              <th>Status</th>
              <th>Conductivity</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(sample => (
              <tr key={sample.id} onClick={() => onRowClick(sample.id)}>
                <td>{sample.slNo}</td>
                <td>{sample.pva}</td>
                <td>{sample.sa}</td>
                <td>{sample.rgo}</td>
                <td>{sample.solvent}</td>
                <td onClick={(e) => e.stopPropagation()}>
                  <select 
                    value={sample.assignedTo} 
                    onChange={(e) => onUpdateSample(sample.id, { assignedTo: e.target.value as Assignee })}
                    className="table-select"
                  >
                    {TEAM.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </td>
                <td onClick={(e) => e.stopPropagation()}>
                  <select 
                    value={sample.status} 
                    onChange={(e) => onUpdateSample(sample.id, { status: e.target.value as Status })}
                    className={`table-select ${getStatusClass(sample.status)}`}
                  >
                    {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </td>
                <td onClick={(e) => e.stopPropagation()}>
                  <input 
                    type="number" 
                    value={sample.conductivity} 
                    onChange={(e) => onUpdateSample(sample.id, { conductivity: e.target.value })}
                    className="table-input"
                    placeholder="-"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
