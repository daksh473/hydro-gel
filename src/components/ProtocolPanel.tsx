import { X } from 'lucide-react';

interface ProtocolPanelProps {
  onClose: () => void;
}

export function ProtocolPanel({ onClose }: ProtocolPanelProps) {
  return (
    <div className="protocol-panel open">
      <div className="panel-header">
        <h2>Synthesis Protocol</h2>
        <button className="btn-icon" onClick={onClose}><X size={20} /></button>
      </div>
      <div className="panel-content">
        <div className="protocol-step">
          <h3>Step 1 – Prepare PVA solution</h3>
          <p>Weigh PVA for target % (5/6/7% w/v; e.g. 5g in 100ml DI water), 90–95°C, stir 200rpm, 2–3h until clear/viscous, cool to room temp.</p>
        </div>
        
        <div className="protocol-step">
          <h3>Step 2 – Prepare SA solution</h3>
          <p>Weigh sodium alginate for target % (2 or 3% w/v; e.g. 2g in 100ml DI water), room temp, stir 500rpm, 1–2h until homogeneous, add gradually to avoid clumps.</p>
        </div>
        
        <div className="protocol-step">
          <h3>Step 3 – Prepare rGO stock dispersion</h3>
          <p>5 mg/mL stock in Water:EG ratio per row (9:1 or 8:2), e.g. 50mg rGO in 10ml solvent for 9:1; bath sonicate 20 min at room temp until uniform dark dispersion, avoid over-sonicating past ~1h.</p>
        </div>
        
        <div className="protocol-step">
          <h3>Step 4 – Disperse rGO into SA solution</h3>
          <p>Pipette calculated stock volume into cooled SA solution, stir 500rpm at room temp, 60 min until uniformly dark with no aggregation.</p>
        </div>
        
        <div className="protocol-step">
          <h3>Step 5 – Combine PVA + SA/rGO</h3>
          <p>Slowly add cooled PVA into SA/rGO dispersion, stir 400rpm at 40°C, 120 min until homogeneous.</p>
        </div>
        
        <div className="protocol-step highlight">
          <h3>Drying</h3>
          <p>Pour 400µl hydrogel into mould (2cm x 1cm); keep at 37°C for 6h, then pour another 200µl on top; keep drying rest 18h at 37°C; dried hydrogel used for I-V measurement.</p>
        </div>
      </div>
    </div>
  );
}
