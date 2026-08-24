
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
('1', 1, '0.05', '0.02', '0.5 wt%', '4.5:0.5(09:01)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('2', 2, '0.05', '0.02', '1 wt%', '4.5:0.5(09:01)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('3', 3, '0.05', '0.02', '1.5 wt%', '4.5:0.5(09:01)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('4', 4, '0.05', '0.02', '2 wt%', '4.5:0.5(09:01)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('5', 5, '0.05', '0.03', '0.5 wt%', '4.5:0.5(09:01)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('6', 6, '0.05', '0.03', '1 wt%', '4.5:0.5(09:01)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('7', 7, '0.05', '0.03', '1.5 wt%', '4.5:0.5(09:01)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('8', 8, '0.05', '0.03', '2 wt%', '4.5:0.5(09:01)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('9', 9, '0.06', '0.02', '0.5 wt%', '4.5:0.5(09:01)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('10', 10, '0.06', '0.02', '1 wt%', '4.5:0.5(09:01)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('11', 11, '0.06', '0.02', '1.5 wt%', '4.5:0.5(09:01)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('12', 12, '0.06', '0.02', '2 wt%', '4.5:0.5(09:01)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('13', 13, '0.06', '0.03', '0.5 wt%', '4.5:0.5(09:01)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('14', 14, '0.06', '0.03', '1 wt%', '4.5:0.5(09:01)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('15', 15, '0.06', '0.03', '1.5 wt%', '4.5:0.5(09:01)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('16', 16, '0.06', '0.03', '2 wt%', '4.5:0.5(09:01)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('17', 17, '0.07', '0.02', '0.5 wt%', '4.5:0.5(09:01)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('18', 18, '0.07', '0.02', '1 wt%', '4.5:0.5(09:01)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('19', 19, '0.07', '0.02', '1.5 wt%', '4.5:0.5(09:01)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('20', 20, '0.07', '0.02', '2 wt%', '4.5:0.5(09:01)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('21', 21, '0.07', '0.03', '0.5 wt%', '4.5:0.5(09:01)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('22', 22, '0.07', '0.03', '1 wt%', '4.5:0.5(09:01)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('23', 23, '0.07', '0.03', '1.5 wt%', '4.5:0.5(09:01)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('24', 24, '0.07', '0.03', '2 wt%', '4.5:0.5(09:01)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('25', 25, '0.05', '0.02', '0.5 wt%', '04:01(08:02)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('26', 26, '0.05', '0.02', '1 wt%', '04:01(08:02)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('27', 27, '0.05', '0.02', '1.5 wt%', '04:01(08:02)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('28', 28, '0.05', '0.02', '2 wt%', '04:01(08:02)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('29', 29, '0.05', '0.03', '0.5 wt%', '04:01(08:02)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('30', 30, '0.05', '0.03', '1 wt%', '04:01(08:02)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('31', 31, '0.05', '0.03', '1.5 wt%', '04:01(08:02)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('32', 32, '0.05', '0.03', '2 wt%', '04:01(08:02)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('33', 33, '0.06', '0.02', '0.5 wt%', '04:01(08:02)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('34', 34, '0.06', '0.02', '1 wt%', '04:01(08:02)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('35', 35, '0.06', '0.02', '1.5 wt%', '04:01(08:02)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('36', 36, '0.06', '0.02', '2 wt%', '04:01(08:02)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('37', 37, '0.06', '0.03', '0.5 wt%', '04:01(08:02)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('38', 38, '0.06', '0.03', '1 wt%', '04:01(08:02)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('39', 39, '0.06', '0.03', '1.5 wt%', '04:01(08:02)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('40', 40, '0.06', '0.03', '2 wt%', '04:01(08:02)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('41', 41, '0.07', '0.02', '0.5 wt%', '04:01(08:02)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('42', 42, '0.07', '0.02', '1 wt%', '04:01(08:02)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('43', 43, '0.07', '0.02', '1.5 wt%', '04:01(08:02)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('44', 44, '0.07', '0.02', '2 wt%', '04:01(08:02)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('45', 45, '0.07', '0.03', '0.5 wt%', '04:01(08:02)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('46', 46, '0.07', '0.03', '1 wt%', '04:01(08:02)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('47', 47, '0.07', '0.03', '1.5 wt%', '04:01(08:02)', 'Unassigned', 'Not Started', '', '', '', '', '', 0),
('s48', 48, '5', '1.5', '0.1', '1:1', 'Unassigned', 'Not Started', '', '', '', '', '', 0);
