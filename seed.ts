import { INITIAL_DATA } from './src/data.ts';
import fs from 'fs';

let sql = `
-- Create the samples table
CREATE TABLE IF NOT EXISTS public.samples (
  id TEXT PRIMARY KEY,
  "slNo" INTEGER NOT NULL,
  pva TEXT NOT NULL,
  sa TEXT NOT NULL,
  rgo TEXT NOT NULL,
  solvent TEXT NOT NULL,
  "assignedTo" TEXT NOT NULL,
  status TEXT NOT NULL,
  slope TEXT,
  conductivity TEXT,
  notes TEXT,
  "graphUrl" TEXT,
  "lastUpdatedBy" TEXT,
  "lastUpdatedAt" BIGINT
);

-- Enable Realtime
alter publication supabase_realtime add table samples;

-- Create policy for public access (since login is app-level)
ALTER TABLE public.samples ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public select" ON public.samples FOR SELECT USING (true);
CREATE POLICY "Allow public insert" ON public.samples FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update" ON public.samples FOR UPDATE USING (true);

-- Insert 48 initial rows
INSERT INTO public.samples (id, "slNo", pva, sa, rgo, solvent, "assignedTo", status, slope, conductivity, notes, "graphUrl", "lastUpdatedBy", "lastUpdatedAt")
VALUES
`;

const values = INITIAL_DATA.map(s => {
  return `('${s.id}', ${s.slNo}, '${s.pva}', '${s.sa}', '${s.rgo}', '${s.solvent}', '${s.assignedTo}', '${s.status}', '${s.slope}', '${s.conductivity}', '${s.notes}', '${s.graphUrl}', '${s.lastUpdatedBy}', ${s.lastUpdatedAt})`;
});

sql += values.join(',\n') + ';\n';

fs.writeFileSync('setup_supabase.sql', sql);
console.log('SQL generated successfully.');
