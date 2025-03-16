import * as migration_20250316_072429 from './20250316_072429';

export const migrations = [
  {
    up: migration_20250316_072429.up,
    down: migration_20250316_072429.down,
    name: '20250316_072429'
  },
];
