import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type todoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class todo {
  readonly id: string;
  readonly name: string;
  readonly user: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<todo, todoMetaData>);
  static copyOf(source: todo, mutator: (draft: MutableModel<todo, todoMetaData>) => MutableModel<todo, todoMetaData> | void): todo;
}