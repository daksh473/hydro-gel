import type { Sample } from '../data';
import { CheckCircle, Clock } from 'lucide-react';

interface DashboardProps {
  samples: Sample[];
}

const TEAM = ['Subhasish', 'Daksh', 'Swayam Shree', 'Suman', 'Nuzail'];

export function Dashboard({ samples }: DashboardProps) {
  const completed = samples.filter(s => s.status === 'Done').length;
  const total = samples.length;
  const remaining = total - completed;

  const workload = TEAM.map(member => {
    const assigned = samples.filter(s => s.assignedTo === member);
    const done = assigned.filter(s => s.status === 'Done').length;
    return { member, assigned: assigned.length, done };
  });

  return (
    <div className="dashboard animate-fade-up">
      <div className="stat-card card primary-stat">
        <div className="stat-icon"><CheckCircle size={24} /></div>
        <div className="stat-info">
          <h3>Overall Progress</h3>
          <div className="stat-value">{completed} / {total}</div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${(completed / total) * 100}%` }}></div>
          </div>
        </div>
      </div>
      
      <div className="stat-card card">
        <div className="stat-icon"><Clock size={24} /></div>
        <div className="stat-info">
          <h3>Remaining</h3>
          <div className="stat-value">{remaining}</div>
        </div>
      </div>

      <div className="workload-section card">
        <h3>Team Workload</h3>
        <div className="workload-grid">
          {workload.map(w => (
            <div key={w.member} className="workload-card">
              <div className="member-name">{w.member}</div>
              <div className="member-stats">
                <span>{w.done} done</span>
                <span className="separator">/</span>
                <span>{w.assigned} assigned</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
