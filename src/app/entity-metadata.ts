import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Dino: {}
};

const pluralNames = {
  Dino: 'Dinos'
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};
