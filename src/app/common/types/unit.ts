export type UnitAges = 'Dark' | 'Feudal' | 'Castle' | 'Imperial';
export type UnitCostTypes = 'Food' | 'Wood' | 'Gold';

export interface Unit {
  id: number;
  name: string;
  description: string;
  expansion: string;
  age: UnitAges;
  cost: Record<UnitCostTypes | string, number>;
  build_time: number;
  accuracy: string;
  armor: string;
  attack: number;
  attack_bonus: string[];
  attack_delay: number;
  hit_points: number;
  line_of_sight: number;
  movement_rate: number;
  range: number;
  reload_time: number;
}

export interface UnitFilter {
  age?: UnitAges;
  cost?: Record<UnitCostTypes | string, number[]>;
  page?: number;
  limit?: number;
}
