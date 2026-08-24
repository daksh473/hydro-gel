export type Status = 
  | 'Not Started' 
  | 'Step 1 – PVA Solution' 
  | 'Step 2 – SA Solution' 
  | 'Step 3 – rGO Dispersion' 
  | 'Step 4 – rGO in SA' 
  | 'Step 5 – Combine PVA+SA/rGO' 
  | 'Drying' 
  | 'Done';

export const STATUSES: Status[] = [
  'Not Started',
  'Step 1 – PVA Solution',
  'Step 2 – SA Solution',
  'Step 3 – rGO Dispersion',
  'Step 4 – rGO in SA',
  'Step 5 – Combine PVA+SA/rGO',
  'Drying',
  'Done'
];

export type Assignee = 'Subhasish' | 'Daksh' | 'Swayam Shree' | 'Suman' | 'Nuzail' | 'Unassigned';

export interface Sample {
  id: string; // Will be same as slNo as string, for Yjs map keys
  slNo: number;
  pva: string;
  sa: string;
  rgo: string;
  solvent: string;
  assignedTo: Assignee;
  status: Status;
  slope: string;
  conductivity: string;
  notes: string;
  graphUrl: string;
  lastUpdatedBy: string;
  lastUpdatedAt: number;
}

export const INITIAL_DATA: Sample[] = [
  { id: "1", slNo: 1, pva: "0.05", sa: "0.02", rgo: "0.5 wt%", solvent: "4.5:0.5(09:01)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "2", slNo: 2, pva: "0.05", sa: "0.02", rgo: "1 wt%", solvent: "4.5:0.5(09:01)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "3", slNo: 3, pva: "0.05", sa: "0.02", rgo: "1.5 wt%", solvent: "4.5:0.5(09:01)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "4", slNo: 4, pva: "0.05", sa: "0.02", rgo: "2 wt%", solvent: "4.5:0.5(09:01)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "5", slNo: 5, pva: "0.05", sa: "0.03", rgo: "0.5 wt%", solvent: "4.5:0.5(09:01)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "6", slNo: 6, pva: "0.05", sa: "0.03", rgo: "1 wt%", solvent: "4.5:0.5(09:01)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "7", slNo: 7, pva: "0.05", sa: "0.03", rgo: "1.5 wt%", solvent: "4.5:0.5(09:01)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "8", slNo: 8, pva: "0.05", sa: "0.03", rgo: "2 wt%", solvent: "4.5:0.5(09:01)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "9", slNo: 9, pva: "0.06", sa: "0.02", rgo: "0.5 wt%", solvent: "4.5:0.5(09:01)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "10", slNo: 10, pva: "0.06", sa: "0.02", rgo: "1 wt%", solvent: "4.5:0.5(09:01)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "11", slNo: 11, pva: "0.06", sa: "0.02", rgo: "1.5 wt%", solvent: "4.5:0.5(09:01)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "12", slNo: 12, pva: "0.06", sa: "0.02", rgo: "2 wt%", solvent: "4.5:0.5(09:01)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "13", slNo: 13, pva: "0.06", sa: "0.03", rgo: "0.5 wt%", solvent: "4.5:0.5(09:01)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "14", slNo: 14, pva: "0.06", sa: "0.03", rgo: "1 wt%", solvent: "4.5:0.5(09:01)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "15", slNo: 15, pva: "0.06", sa: "0.03", rgo: "1.5 wt%", solvent: "4.5:0.5(09:01)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "16", slNo: 16, pva: "0.06", sa: "0.03", rgo: "2 wt%", solvent: "4.5:0.5(09:01)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "17", slNo: 17, pva: "0.07", sa: "0.02", rgo: "0.5 wt%", solvent: "4.5:0.5(09:01)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "18", slNo: 18, pva: "0.07", sa: "0.02", rgo: "1 wt%", solvent: "4.5:0.5(09:01)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "19", slNo: 19, pva: "0.07", sa: "0.02", rgo: "1.5 wt%", solvent: "4.5:0.5(09:01)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "20", slNo: 20, pva: "0.07", sa: "0.02", rgo: "2 wt%", solvent: "4.5:0.5(09:01)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "21", slNo: 21, pva: "0.07", sa: "0.03", rgo: "0.5 wt%", solvent: "4.5:0.5(09:01)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "22", slNo: 22, pva: "0.07", sa: "0.03", rgo: "1 wt%", solvent: "4.5:0.5(09:01)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "23", slNo: 23, pva: "0.07", sa: "0.03", rgo: "1.5 wt%", solvent: "4.5:0.5(09:01)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "24", slNo: 24, pva: "0.07", sa: "0.03", rgo: "2 wt%", solvent: "4.5:0.5(09:01)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "25", slNo: 25, pva: "0.05", sa: "0.02", rgo: "0.5 wt%", solvent: "04:01(08:02)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "26", slNo: 26, pva: "0.05", sa: "0.02", rgo: "1 wt%", solvent: "04:01(08:02)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "27", slNo: 27, pva: "0.05", sa: "0.02", rgo: "1.5 wt%", solvent: "04:01(08:02)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "28", slNo: 28, pva: "0.05", sa: "0.02", rgo: "2 wt%", solvent: "04:01(08:02)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "29", slNo: 29, pva: "0.05", sa: "0.03", rgo: "0.5 wt%", solvent: "04:01(08:02)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "30", slNo: 30, pva: "0.05", sa: "0.03", rgo: "1 wt%", solvent: "04:01(08:02)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "31", slNo: 31, pva: "0.05", sa: "0.03", rgo: "1.5 wt%", solvent: "04:01(08:02)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "32", slNo: 32, pva: "0.05", sa: "0.03", rgo: "2 wt%", solvent: "04:01(08:02)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "33", slNo: 33, pva: "0.06", sa: "0.02", rgo: "0.5 wt%", solvent: "04:01(08:02)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "34", slNo: 34, pva: "0.06", sa: "0.02", rgo: "1 wt%", solvent: "04:01(08:02)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "35", slNo: 35, pva: "0.06", sa: "0.02", rgo: "1.5 wt%", solvent: "04:01(08:02)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "36", slNo: 36, pva: "0.06", sa: "0.02", rgo: "2 wt%", solvent: "04:01(08:02)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "37", slNo: 37, pva: "0.06", sa: "0.03", rgo: "0.5 wt%", solvent: "04:01(08:02)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "38", slNo: 38, pva: "0.06", sa: "0.03", rgo: "1 wt%", solvent: "04:01(08:02)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "39", slNo: 39, pva: "0.06", sa: "0.03", rgo: "1.5 wt%", solvent: "04:01(08:02)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "40", slNo: 40, pva: "0.06", sa: "0.03", rgo: "2 wt%", solvent: "04:01(08:02)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "41", slNo: 41, pva: "0.07", sa: "0.02", rgo: "0.5 wt%", solvent: "04:01(08:02)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "42", slNo: 42, pva: "0.07", sa: "0.02", rgo: "1 wt%", solvent: "04:01(08:02)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "43", slNo: 43, pva: "0.07", sa: "0.02", rgo: "1.5 wt%", solvent: "04:01(08:02)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "44", slNo: 44, pva: "0.07", sa: "0.02", rgo: "2 wt%", solvent: "04:01(08:02)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "45", slNo: 45, pva: "0.07", sa: "0.03", rgo: "0.5 wt%", solvent: "04:01(08:02)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "46", slNo: 46, pva: "0.07", sa: "0.03", rgo: "1 wt%", solvent: "04:01(08:02)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  { id: "47", slNo: 47, pva: "0.07", sa: "0.03", rgo: "1.5 wt%", solvent: "04:01(08:02)", assignedTo: "Unassigned", status: "Not Started", slope: "", conductivity: "", notes: "", graphUrl: "", lastUpdatedBy: "", lastUpdatedAt: 0 },
  {
    id: 's48',
    slNo: 48,
    pva: '5',
    sa: '1.5',
    rgo: '0.1',
    solvent: '1:1',
    assignedTo: 'Unassigned',
    status: 'Not Started',
    slope: '',
    conductivity: '',
    notes: '',
    graphUrl: '',
    lastUpdatedBy: '',
    lastUpdatedAt: 0
  },
];
